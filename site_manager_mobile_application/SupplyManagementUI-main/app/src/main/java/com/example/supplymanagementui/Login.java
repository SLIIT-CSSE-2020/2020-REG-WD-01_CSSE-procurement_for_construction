package com.example.supplymanagementui;

import android.annotation.SuppressLint;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * An example full-screen activity that shows and hides the system UI (i.e.
 * status bar and navigation/system bar) with user interaction.
 */
public class Login extends AppCompatActivity {
    String TAG = "Login.java";
    Button btnLogin;
    EditText edtTxtEmail;
    EditText edtTxtPassword;

    String uName;
    String pass;
    private RequestQueue loginQueue;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        //Hide status bar
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

        //Hide action bar
        ActionBar actionBar = getSupportActionBar();
        actionBar.hide();

        setContentView(R.layout.activity_login);

        edtTxtEmail = findViewById(R.id.edtTxtEmail);
        edtTxtPassword = findViewById(R.id.edtTxtPassword);

        btnLogin = findViewById(R.id.btnLogin);
        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                //login data validation start
                uName = edtTxtEmail.getText().toString();
                pass = edtTxtPassword.getText().toString();


                if(uName.isEmpty()){
                    edtTxtEmail.setError("Please provide a email");
                    edtTxtEmail.requestFocus();
                }else if(pass.isEmpty()){
                    edtTxtPassword.setError("Please provide a password");
                    edtTxtPassword.requestFocus();
                }else{

                    jsonParse(uName,pass);
//
                }
                //login data validation end




            }
        });
        loginQueue = Volley.newRequestQueue(Login.this);
    }




    private void jsonParse(String user,String pass){
        final ProgressDialog progressDialog = new ProgressDialog(Login.this);
        progressDialog.setTitle("Loading");
        progressDialog.setMessage("");
        progressDialog.setCancelable(false);
        progressDialog.show();

        String url = "http://192.168.8.167:5000/user/"+user+"/"+pass;
        Log.d(TAG,"JSON URL"+url);
        JsonObjectRequest loginRequest = new JsonObjectRequest(Request.Method.GET, url, null,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        Log.d(TAG,"JSON RESULT"+response.toString());
                        try{


                            Boolean message = response.getBoolean("status");
                            Log.d(TAG,"JSON RESULT"+message.toString());
                            if(message){
                                MainActivity.loggedIn = true;
                                Intent intent = new Intent(Login.this, MainActivity.class);
                                intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                                finish();
                                startActivity(intent);
                            }else{
                                Toast.makeText(Login.this, "Login failed", Toast.LENGTH_SHORT).show();
                            }
                            progressDialog.hide();
                        }catch (JSONException e) {
                            e.printStackTrace();
                            Log.d(TAG,"JSON RESULT"+e.toString());
                        }


                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                error.printStackTrace();
            }

        });
        loginQueue.add(loginRequest);

    }

}