package com.ahi.web.controllers;

import java.security.Principal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ahi.entity.AhiUser;
import com.ahi.service.UserService;
import com.ahi.web.to.PasswordConfirmation;

@RequestMapping("/rest/user")
@RestController()
public class UserController {

	private final Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/users", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Iterable<AhiUser>> getUsers(Principal principal) {
		log.info("get users " + principal.getName());
		return new ResponseEntity<Iterable<AhiUser>> (userService.getUsers(), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/userdetails",  method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<AhiUser> getLoggedInUserDetails(Principal principal) {
    	
		return new ResponseEntity<AhiUser> (userService.getUser(principal.getName()), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{username}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<AhiUser> getUser(@PathVariable String username, Principal principal) {
		log.info("get user "+principal.getName());
		return new ResponseEntity<AhiUser> (userService.getUser(username), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> saveUser(
			@RequestBody AhiUser user, Principal principal) throws Exception {
		log.info("save user : "+principal.getName());
		
		//AuthenticatedUser user = (AuthenticatedUser) SecurityContextHolder.getContext().getAuthentication();
		userService.saveUser(principal.getName(), user);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/changepassword", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> changePassword(
			@RequestBody PasswordConfirmation passwordConfirmation, Principal principal) throws Exception {
		log.info("change password : " + principal.getName());
		
		userService.changePassword(principal.getName(), passwordConfirmation);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	/*
	@RequestMapping(value = "/api/roles", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Iterable<TycheRole>> getRoles(Principal principal) {
		log.info("get roles : "+ principal.getName());
		return new ResponseEntity<Iterable<TycheRole>> (userService.getRoles(), HttpStatus.OK);
	}
	*/
}
