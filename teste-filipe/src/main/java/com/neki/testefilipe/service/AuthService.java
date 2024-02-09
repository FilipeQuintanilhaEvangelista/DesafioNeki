package com.neki.testefilipe.service;

import com.neki.testefilipe.model.User;
import com.neki.testefilipe.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User authenticate(String username, String password) throws Exception {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new Exception("Usuário não encontrado"));
        
        if (passwordEncoder.matches(password, user.getPassword())) {
            return user;
        } else {
            throw new Exception("Senha inválida");
        }
    }
}
