package com.springreact.dsvendas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springreact.dsvendas.dto.SaleDTO;
import com.springreact.dsvendas.dto.SaleSucessDTO;
import com.springreact.dsvendas.dto.SaleSumDTO;
import com.springreact.dsvendas.entities.Sale;
import com.springreact.dsvendas.repositories.SaleRepository;
import com.springreact.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {
	
	@Autowired // injetado de forma transparente
	private SaleRepository repository;
	
	@Autowired 
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true) // para não realizar looking no banco
	public Page<SaleDTO> findAll (Pageable pageable){
		sellerRepository.findAll();
		Page <Sale> result = repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupedBySeller(){
		return repository.amountGroupedBySeller();
	}
	
	@Transactional(readOnly = true)
	public List<SaleSucessDTO> sucessGroupedBySeller(){
		return repository.sucessGroupedBySeller();
	}
	
}
