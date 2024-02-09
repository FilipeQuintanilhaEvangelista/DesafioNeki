package com.neki.testefilipe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.neki.testefilipe.dto.UserResponseDTO;
import com.neki.testefilipe.model.User;
import com.neki.testefilipe.security.JwtTokenService;
import com.neki.testefilipe.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@RestController
@RequestMapping("/users")
@Tag(name = "Users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtTokenService jwtTokenService;

    @PostMapping("/register")
    @Operation(summary = "Registrar um novo usuário")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        try {
            userService.registerUser(user);
            String token = jwtTokenService.generateToken(user.getUsername());
            return ResponseEntity.ok("Usuário cadastrado com sucesso! Token: " + token);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    @Operation(summary = "Listar todos os usuários")
    public ResponseEntity<List<UserResponseDTO>> getAllUsers() {
        List<UserResponseDTO> users = userService.findAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obter usuário pelo Id")
    public ResponseEntity<UserResponseDTO> getUserById(@PathVariable Long id) {
        UserResponseDTO user = userService.findUserById(id);
        return ResponseEntity.ok(user);
    }
}
