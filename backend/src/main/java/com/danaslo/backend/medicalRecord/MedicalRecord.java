package com.danaslo.backend.medicalRecord;

import java.time.LocalDateTime;

public class MedicalRecord {
    private Long id;
    private Long petId;
    private String title;
    private String description;
    private LocalDateTime appointmentDate;

    public MedicalRecord() {
    }


    public MedicalRecord(Long id, Long petId, String title,
                         String description, LocalDateTime appointmentDate) {
        this.id = id;
        this.petId = petId;
        this.title = title;
        this.description = description;
        this.appointmentDate = appointmentDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPetId() {
        return petId;
    }

    public void setPetId(Long petId) {
        this.petId = petId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(LocalDateTime appointmentDate) {
        this.appointmentDate = appointmentDate;
    }
}
