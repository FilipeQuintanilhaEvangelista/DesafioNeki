package com.neki.testefilipe.controller;

import com.neki.testefilipe.dto.AuthDTO;
import com.neki.testefilipe.dto.LoginResponseDTO;
import com.neki.testefilipe.model.User;
import com.neki.testefilipe.security.JwtTokenService;
import com.neki.testefilipe.service.AuthService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@Tag(name = "Authentication")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtTokenService jwtTokenService;

    @PostMapping("/login")
    @Operation(summary = "Fazer login para obter o token de acesso")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody AuthDTO authDTO) {
        try {
            User user = authService.authenticate(authDTO.getUsername(), authDTO.getPassword());
            String token = jwtTokenService.generateToken(user.getUsername());

            LoginResponseDTO response = new LoginResponseDTO();
            response.setId(user.getId());
            response.setUsername(user.getUsername());
            response.setToken(token);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
