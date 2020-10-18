package com.example.supplymanagementui;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
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

public class AddOrder3 extends AppCompatActivity {


    EditText edtTxtQuantity;
    EditText edtTxtUnitPrice;
    EditText edtTxtTotal;

    Button btnSave;


    String quantity;
    String unitPrice;
    String total;

    String TAG = "AddOrder3.java";

    private RequestQueue loginQueue;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_order3);

        Intent intent= getIntent();
        Bundle b = intent.getExtras();

        edtTxtQuantity = findViewById(R.id.edtTxtQuantity);
        edtTxtUnitPrice = findViewById(R.id.edtTxtUnitPrice);
        edtTxtTotal = findViewById(R.id.edtTxtTotal);

        btnSave = findViewById(R.id.btnSave);




        String address;
        String date;
        String req;
        String material;
        String supplier;

        address = intent.getStringExtra("address");
        date = intent.getStringExtra("date");
        req = intent.getStringExtra("req");
        material = intent.getStringExtra("material");
        supplier = intent.getStringExtra("supplier");


        Log.d("data","address"+address);
        Log.d("data","date"+date);
        Log.d("data","req"+req);
        Log.d("data","material"+material);
        Log.d("data","supplier"+supplier);




        btnSave.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //validate data start

                    quantity = edtTxtQuantity.getText().toString();
                    unitPrice = edtTxtUnitPrice.getText().toString();
                    total = edtTxtTotal.getText().toString();
                    if(quantity.isEmpty()){
                        edtTxtQuantity.setError("Please provide Quantity");
                        edtTxtQuantity.requestFocus();
                    }else if(unitPrice.isEmpty()){
                        edtTxtUnitPrice.setError("Please provide Unit Price");
                        edtTxtUnitPrice.requestFocus();
                    }else if(total.isEmpty()){
                        edtTxtTotal.setError("Please provide Total");
                        edtTxtTotal.requestFocus();
                    }else{
                        Float qty;
                        Float untPrice;
                        Float tot;
                        qty = new Float(quantity) ;
                        untPrice = new Float(unitPrice) ;
                        tot = new Float(total) ;

                        jsonParse(address,date,req, material,supplier,qty, untPrice, tot);

                    }
                //validate data end
            }
        });





        if(b!=null)
        {
            String j =(String) b.get("supplier");
            Toast.makeText(AddOrder3.this, j + "was selected", Toast.LENGTH_SHORT).show();
        }
        loginQueue = Volley.newRequestQueue(AddOrder3.this);
    }



    private void jsonParse(String address,String date,String req,String material,String supId,Float qty,Float uprice,Float total){
        final ProgressDialog progressDialog = new ProgressDialog(AddOrder3.this);
        progressDialog.setTitle("Loading");
        progressDialog.setMessage("");
        progressDialog.setCancelable(false);
        progressDialog.show();

        String url = "http://192.168.8.167:5000/order/"+address+"/"+date+"/"+req+"/"+material+"/"+supId+"/"+qty+"/"+uprice+"/"+total;
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
                                Intent intent = new Intent(AddOrder3.this, MainActivity.class);
                                intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                                finish();
                                startActivity(intent);
                                Toast.makeText(AddOrder3.this, "Saved", Toast.LENGTH_SHORT).show();
                            }else{
                                Toast.makeText(AddOrder3.this, "Login failed", Toast.LENGTH_SHORT).show();
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