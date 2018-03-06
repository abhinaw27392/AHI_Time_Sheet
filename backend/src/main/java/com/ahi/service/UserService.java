package com.ahi.service;

import com.ahi.entity.AhiUser;
import com.ahi.web.to.PasswordConfirmation;

public interface UserService {

	void saveUser(String loginId, AhiUser user) throws Exception;
	
	AhiUser getUser(String username);
	
	Iterable<AhiUser> getUsers();
	
	void changePassword(String loginId, PasswordConfirmation passwordConfirmation) throws Exception;
	
}
