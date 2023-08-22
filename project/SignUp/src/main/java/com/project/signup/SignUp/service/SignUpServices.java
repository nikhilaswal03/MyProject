package com.project.signup.SignUp.service;

import com.project.signup.SignUp.model.Details;
import com.project.signup.SignUp.repository.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
@Service
public class SignUpServices {
    @Autowired
    private SignUpRepository signUpRepository;
    List<Details> signup= new ArrayList<>(
            Arrays.asList(
                    new Details("Nikhil","Aswal","nikhilaswal@gmail.com", "Nikhil_Aswal03", "dec2003"),
                    new Details("Rahul","Kumar","rahulkumar@gmail.com", "Rahul_Kumar20", "sept2002"),
                    new Details("Ritish","Jugral","ritishjugral@gmail.com", "Ritish_jugral", "july2002"),
                    new Details("Dharamu","Jaat","dharamujaat@gmail.com", "Dharamu_Jaat24", "aug2002"),
                    new Details("Nikhil", "Sharma","nikhilsharma@gmail.com", "Nikhil_Sharma", "July2003")
            )
    );
    public List<Details> getAllUsers() {
        List<Details> signup = new ArrayList<>();
        signUpRepository.findAll().forEach(Details -> signup.add(Details));
        return signup;
    }
    public Details getUsersInfo(String username) {
        return signup.stream().filter(s -> s.getUsername().equals(username)).findFirst().get();
    }
    public void addUser(Details Details) { signUpRepository.save(Details); }
//    public void editUser(String username, Details updatedDetails) {
//        for(int i=0; i < users.size(); i++) {
//            Details s = Details.get(i);
//            if(s.getUsername().equals(username)) {
//                users.set(i, updatedDetails);
//            }
//        }
}
