package com.example.supplymanagementui;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.widget.EditText;
import android.widget.ListView;

import java.util.ArrayList;

public class AddOrder2 extends AppCompatActivity implements TextWatcher {

    ArrayList<Supplier> myList;
    SupplierListAdapter myAdapter;
    EditText searchSuppliers;
    ListView supplierList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_order2);

        searchSuppliers = findViewById(R.id.txtSearchSupplier);

        supplierList = findViewById(R.id.listSupplier);


        searchSuppliers.addTextChangedListener(this);


        Intent intent = getIntent();

        String address;
        String date;
        String req;
        String material;

        address = intent.getStringExtra("address");
        date = intent.getStringExtra("date");
        req = intent.getStringExtra("req");
        material = intent.getStringExtra("material");



        myList = new ArrayList<>();
        myList.add(new Supplier("Supplier 01"));
        myList.add(new Supplier("Supplier 02"));
        myList.add(new Supplier("Supplier 03"));
        myList.add(new Supplier("Supplier 04"));
        myList.add(new Supplier("Supplier 05"));
        myList.add(new Supplier("Supplier 06"));
        myList.add(new Supplier("Supplier 07"));
        myList.add(new Supplier("Supplier 08"));
        myList.add(new Supplier("Supplier 09"));
        myList.add(new Supplier("Supplier 10"));
        myList.add(new Supplier("Supplier 11"));
        myList.add(new Supplier("Supplier 12"));
        myList.add(new Supplier("Supplier 13"));
        myList.add(new Supplier("Supplier 14"));
        myList.add(new Supplier("Supplier 15"));
        myList.add(new Supplier("Supplier 16"));

        AddOrderModel addOModel = new AddOrderModel(address,date,req,material);


        myAdapter = new SupplierListAdapter(AddOrder2.this, myList,addOModel);

        supplierList.setAdapter(myAdapter);

    }

    @Override
    public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {

    }

    @Override
    public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
        this.myAdapter.getFilter().filter(charSequence);
    }

    @Override
    public void afterTextChanged(Editable editable) {

    }
}