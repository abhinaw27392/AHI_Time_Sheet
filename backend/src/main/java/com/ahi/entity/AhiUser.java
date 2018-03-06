package com.ahi.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="ahi_user")
public class AhiUser{

	@Id
	@Column(name = "user_id")
    private Integer id;

    private String firstName;
    
    private String lastName;
    
    private String loginId;

    private String password;
    
    private String email;

    private boolean active;
    
	private String whoCreated;
	
	private Date whenCreated;
	
	private String whoUpdated;
	
	private Date whenUpdated;
	
	@OneToMany
	@JoinTable ( name = "ahi_user_security_group", 
				 joinColumns = { @JoinColumn(name="user_id", referencedColumnName="user_id") },
				 inverseJoinColumns = { @JoinColumn(name="security_group_id", referencedColumnName="security_group_id") } 
			)
	private List<SecurityGroup> groups;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getWhoCreated() {
		return whoCreated;
	}

	public void setWhoCreated(String whoCreated) {
		this.whoCreated = whoCreated;
	}

	public Date getWhenCreated() {
		return whenCreated;
	}

	public void setWhenCreated(Date whenCreated) {
		this.whenCreated = whenCreated;
	}

	public String getWhoUpdated() {
		return whoUpdated;
	}

	public void setWhoUpdated(String whoUpdated) {
		this.whoUpdated = whoUpdated;
	}

	public Date getWhenUpdated() {
		return whenUpdated;
	}

	public void setWhenUpdated(Date whenUpdated) {
		this.whenUpdated = whenUpdated;
	}
	
	public List<SecurityGroup> getGroups() {
		return groups;
	}

	public void setGroups(List<SecurityGroup> groups) {
		this.groups = groups;
	}

	@Override
	public String toString() {
		return "TycheUser [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", loginId=" + loginId
				+ ", password=" + password + ", active=" + active + ", email=" + email + ", whoCreated=" + whoCreated
				+ ", whenCreated=" + whenCreated + ", whoUpdated=" + whoUpdated + ", whenUpdated=" + whenUpdated + "]";
	}

	
}
