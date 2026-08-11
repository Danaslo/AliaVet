package com.danaslo.backend.pet;

import java.time.LocalDate;

public class Pet {
    private Long id;
    private Long ownerId;
    private String name;
    private String breed;
    private Gender gender;
    private String species;
    private LocalDate birth;
    private String color;
    private Status status;
    private boolean sterilized;
    private String observations;

    public Pet() {
    }

    public Pet(Long ownerId, String name,
               String breed, Gender gender, String species,
               LocalDate birth, String color, Status status,
               boolean sterilized, String observations) {
        this.ownerId = ownerId;
        this.name = name;
        this.breed = breed;
        this.gender = gender;
        this.species = species;
        this.birth = birth;
        this.color = color;
        this.status = status;
        this.sterilized = sterilized;
        this.observations = observations;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public LocalDate getBirth() {
        return birth;
    }

    public void setBirth(LocalDate birth) {
        this.birth = birth;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public boolean isSterilized() {
        return sterilized;
    }

    public void setSterilized(boolean sterilized) {
        this.sterilized = sterilized;
    }

    public String getObservations() {
        return observations;
    }

    public void setObservations(String observations) {
        this.observations = observations;
    }



}
