package com.example.supplymanagementui;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.android.volley.RequestQueue;

public class AddOrder extends AppCompatActivity {

    Button btnNext;

    EditText edtTxtDeliveryAddress;
    EditText edtTxtDeliveryDate;
    EditText edtTxtRequisitioner;
    EditText edtTxtMaterial;

    String address;
    String date;
    String req;
    String material;


    private RequestQueue loginQueue;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_order);


        edtTxtDeliveryAddress = findViewById(R.id.edtTxtDeliveryAddress);
        edtTxtDeliveryDate = findViewById(R.id.edtTxtDeliveryDate);
        edtTxtRequisitioner = findViewById(R.id.edtTxtRequisitioner);
        edtTxtMaterial = findViewById(R.id.edtTxtMaterial);





        btnNext = findViewById(R.id.btnNext);
        btnNext.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                address = edtTxtDeliveryAddress.getText().toString();
                date = edtTxtDeliveryDate.getText().toString();
                req = edtTxtRequisitioner.getText().toString();
                material = edtTxtMaterial.getText().toString();

                if(address.isEmpty()){
                    edtTxtDeliveryAddress.setError("Please provide Address");
                    edtTxtDeliveryAddress.requestFocus();
                }else if(date.isEmpty()){
                    edtTxtDeliveryDate.setError("Please provide Date");
                    edtTxtDeliveryDate.requestFocus();
                }else if(req.isEmpty()){
                    edtTxtRequisitioner.setError("Please provide Requisitioner");
                    edtTxtRequisitioner.requestFocus();
                }else if(material.isEmpty()){
                    edtTxtMaterial.setError("Please provide Material");
                    edtTxtMaterial.requestFocus();
                }else{
                    Intent intent = new Intent(AddOrder.this, AddOrder2.class);
                    intent.putExtra("address",address);
                    intent.putExtra("date",date);
                    intent.putExtra("req",req);
                    intent.putExtra("material",material);
                    Toast.makeText(AddOrder.this, "Done", Toast.LENGTH_SHORT).show();
                    startActivity(intent);
                }


            }
        });
    }
}