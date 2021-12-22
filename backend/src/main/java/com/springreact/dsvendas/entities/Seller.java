package com.springreact.dsvendas.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity // Mapeamento
@Table (name = "tb_sellers") // "tb_sellers" igual no import.sql

public class Seller {

	@Id // Indica para o BD qual atributo é a Primary Key
	@GeneratedValue (strategy = GenerationType.IDENTITY) // Id será autoincrementado
	private Long id;
	private String name;
	
	@OneToMany(mappedBy = "seller")
	private List<Sale> sales = new ArrayList<>(); //Seller com uma lista de Sales
	
	public Seller () {
		
	}

	//Construtuor (Source>Generate Constructor using Fields> id,name> Generate)
	
	public Seller(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	//Encapsulamento (Source>Generate Getters e Setters> id, name> Generate)
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Sale> getSales() {
		return sales;
	}
	
}
