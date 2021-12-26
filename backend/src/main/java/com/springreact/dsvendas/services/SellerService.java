package com.springreact.dsvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springreact.dsvendas.dto.SellerDTO;
import com.springreact.dsvendas.entities.Seller;
import com.springreact.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {
	
	@Autowired // injeta dependências de forma transparente
	private SellerRepository repository;
	
	public List<SellerDTO> findAll (){
		List <Seller> result = repository.findAll();
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
		//realizada a conversão
	}

}
