package com.springreact.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springreact.dsvendas.dto.SellerDTO;
import com.springreact.dsvendas.services.SellerService;

@RestController // controlador Rest
@RequestMapping(value = "/sellers") // caminho do recurso Web
public class SellerController {
	
	@Autowired
	private SellerService service;
	
	@GetMapping // End Point
	public ResponseEntity<List<SellerDTO>> findAll(){
		List<SellerDTO> list = service.findAll();
		return ResponseEntity.ok(list);
	}
	
}
