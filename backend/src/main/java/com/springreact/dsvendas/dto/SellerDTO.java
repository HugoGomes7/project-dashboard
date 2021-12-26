package com.springreact.dsvendas.dto;

import java.io.Serializable;
import com.springreact.dsvendas.entities.Seller;

public class SellerDTO implements Serializable { // converte os objetos em bytes
	private static final long serialVersionUID = 1L; // default
	private Long id;
	private String name;
	
	public SellerDTO () {
		
	}
	
	//Constructor using Fields
	public SellerDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	//Construtor simples para copiar dados de uma entidade para um DTO
	public SellerDTO(Seller entity) {
		id = entity.getId();
		name = entity.getName();
	}

	//Get & Set
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
}
