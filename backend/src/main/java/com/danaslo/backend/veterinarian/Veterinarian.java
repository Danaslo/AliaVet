package com.danaslo.backend.veterinarian;

public class Veterinarian {
    private Long id;
    private String name;
    private String lastName;
    private String collegeNumber;
    private String phone;
    private String email;

    public Veterinarian() {
    }

    public Veterinarian(Long id, String name, String lastName,
                        String collegeNumber, String phone, String email) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.collegeNumber = collegeNumber;
        this.phone = phone;
        this.email = email;
    }

    public Long getId() {return id;}

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCollegeNumber() {
        return collegeNumber;
    }

    public void setCollegeNumber(String collegeNumber) {
        this.collegeNumber = collegeNumber;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
