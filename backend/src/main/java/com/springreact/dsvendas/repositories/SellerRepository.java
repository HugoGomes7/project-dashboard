package com.springreact.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springreact.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository <Seller, Long> {

	//Operações de inserir, buscar, deletar, buscar, 
	      //já vem implementado padrão no Framework

}

