package com.example.supplymanagementui;

public class AddOrderModel {
    String address;
    String date;
    String req;
    String material;


    public AddOrderModel(String address, String date, String req, String material) {
        this.address = address;
        this.date = date;
        this.req = req;
        this.material = material;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getReq() {
        return req;
    }

    public void setReq(String req) {
        this.req = req;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }
}
