import type { INodeProperties } from 'n8n-workflow';

export const employeeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					]
				}
			},
			"options": [
				{
					"name": "Get Employee By Employee ID",
					"value": "Get Employee By Employee ID",
					"action": "Details of an employee",
					"description": "__Activity name :__ GetEmployeeByEmployeeId\n\nGet the details of a single employee\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}"
						}
					}
				},
				{
					"name": "Put Employee By Employee ID",
					"value": "Put Employee By Employee ID",
					"action": "Edit the details of an employee",
					"description": "__Activity name :__ PutEmployeeByEmployeeId\n\n\nEdit the employee details\n<br />\nPossible values for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the URL\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}"
						}
					}
				},
				{
					"name": "Get Citizen Service Number By Employee ID",
					"value": "Get Citizen Service Number By Employee ID",
					"action": "Citizen service number of an employee",
					"description": "__Activity name :__ GetCitizenServiceNumberByEmployeeId\n\nGet the citizen service number of an employee. BSN is separately authorized in Loket and is therefore designed to have its own activities.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/citizenservicenumber"
						}
					}
				},
				{
					"name": "Put Citizen Service Number By Employee ID",
					"value": "Put Citizen Service Number By Employee ID",
					"action": "Update the citizen service number of an employee",
					"description": "__Activity name :__ PutCitizenServiceNumberByEmployeeId\n\nUpdate the citizen service number of an employee.  BSN is separately authorized in Loket and is therefore designed to have its own activities.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/citizenservicenumber"
						}
					}
				},
				{
					"name": "Delete Employee Photo By Employee ID",
					"value": "Delete Employee Photo By Employee ID",
					"action": "Delete employee photo",
					"description": "__Activity name :__ DeleteEmployeePhotoByEmployeeId\n\nPhoto of the employee to use as an avatar/profile picture\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/photo"
						}
					}
				},
				{
					"name": "Get Employee Photo By Employee ID",
					"value": "Get Employee Photo By Employee ID",
					"action": "Photo of an employee",
					"description": "__Activity name :__ GetEmployeePhotoByEmployeeId\n\nPhoto of the employee to use as an avatar/profile picture\n\n__Caching:__ This resource changes very infrequently and can be cached for a longer time.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/photo"
						}
					}
				},
				{
					"name": "Post Employee Photo By Employee ID",
					"value": "Post Employee Photo By Employee ID",
					"action": "Post employee photo",
					"description": "__Activity name :__ PostEmployeePhotoByEmployeeId\n\nPhoto of the employee to use as an avatar/profile picture\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/photo"
						}
					}
				},
				{
					"name": "Get Employee Photo By Employee ID And Version",
					"value": "Get Employee Photo By Employee ID And Version",
					"action": "Photo of an employee",
					"description": "__Activity name :__ GetEmployeePhotoByEmployeeIdAndVersion\n\nPhoto of the employee to use as an avatar/profile picture\n\n__Caching:__ This resource changes very infrequently and can be cached for a longer time.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/photo/{{$parameter[\"version\"]}}"
						}
					}
				},
				{
					"name": "Patch Revoke Employee Self Service Access By Employee ID",
					"value": "Patch Revoke Employee Self Service Access By Employee ID",
					"action": "Set the date on which to revoke ESS access",
					"description": "__Activity name :__ PatchRevokeEmployeeSelfServiceAccessByEmployeeId\n\nThis endpoint allows the user to set the 'revokeEmployeeSelfServiceAccessOn'. This date indicates on what day the access to WerknemerLoket (Employee Self Service) will be revoked (this is done by scheduled tasks that run during the night). This is particularly useful for situations where for example the employer wants to restrict access at a specific date in the future, for example 1st of May in the next year.\n\nThe value may be set to NULL and thus clearing the date on which access would be revoked. Please note that this endpoint will not automatically 'unblock' an Employee, as that would require a specific action.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/revokeEmployeeSelfServiceAccess"
						}
					}
				},
				{
					"name": "Get Employees By Employer ID",
					"value": "Get Employees By Employer ID",
					"action": "List of employees for an employer",
					"description": "__Activity name :__ GetEmployeesByEmployerId\n\nGet a list of all employees for the given employer\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/employees"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/employees/{employeeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/{employeeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Input the value acquired in the ETag header for concurrency control. Please note this is optional (and not recommended for most types of integrations).",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{\n  \"city\": \"Leiden\",\n  \"country\": {\n    \"isoCode\": \"NL\",\n    \"key\": 1,\n    \"value\": \"Netherlands\"\n  },\n  \"furtherIndication\": {\n    \"key\": 1,\n    \"value\": \"WW\"\n  },\n  \"houseNumber\": 12,\n  \"houseNumberAddition\": \"D\",\n  \"location\": \"Fourth floor or building C\",\n  \"postalCode\": \"1234 AA\",\n  \"street\": \"Voordijk\"\n}",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Contact Information",
			"name": "contactInformation",
			"type": "json",
			"default": "{\n  \"emailAddress\": \"info@loket.nl\",\n  \"faxNumber\": \"+31 13-1234561\",\n  \"mobilePhoneNumber\": \"+31 6-1231456\",\n  \"phoneNumber\": \"+31 13-1234567\"\n}",
			"routing": {
				"send": {
					"property": "contactInformation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Postal Address",
			"name": "deviatingPostalAddress",
			"type": "json",
			"default": "{\n  \"city\": \"Leiden\",\n  \"country\": {\n    \"isoCode\": \"NL\",\n    \"key\": 1,\n    \"value\": \"Netherlands\"\n  },\n  \"furtherIndication\": {\n    \"key\": 1,\n    \"value\": \"WW\"\n  },\n  \"houseNumber\": 12,\n  \"houseNumberAddition\": \"D\",\n  \"location\": \"Fourth floor or building C\",\n  \"postalCode\": \"1234 AA\",\n  \"street\": \"Voordijk\"\n}",
			"routing": {
				"send": {
					"property": "deviatingPostalAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee Number",
			"name": "employeeNumber",
			"type": "number",
			"default": 156,
			"description": "The employee number to uniquely identify an employee within an employer\n",
			"routing": {
				"send": {
					"property": "employeeNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Exclusion From Absence Status",
			"name": "exclusionFromAbsenceStatus",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether the employee is excluded for any information of absence\n",
			"routing": {
				"send": {
					"property": "exclusionFromAbsenceStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Identity Document",
			"name": "identityDocument",
			"type": "json",
			"default": "{\n  \"documentIdentification\": \"CRE45553433\",\n  \"typeOfDocument\": {\n    \"key\": 2,\n    \"value\": \"Passport\"\n  }\n}",
			"routing": {
				"send": {
					"property": "identityDocument",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Personal Details",
			"name": "personalDetails",
			"type": "json",
			"default": "{\n  \"aowDate\": \"2062-08-21\",\n  \"civilStatus\": {\n    \"key\": 2,\n    \"value\": \"Maried\"\n  },\n  \"dateOfBirth\": \"1995-05-21\",\n  \"firstName\": \"Susan\",\n  \"formattedName\": \"Wiel - van Bergen S.L. van de\",\n  \"gender\": {\n    \"key\": 2,\n    \"value\": \"female\"\n  },\n  \"howToFormatLastName\": {\n    \"key\": 2,\n    \"value\": \"last name + last name partner\"\n  },\n  \"initials\": \"S.L.\",\n  \"lastName\": \"Bergen\",\n  \"lastNamePartner\": \"Wiel\",\n  \"nationality\": {\n    \"key\": 2,\n    \"value\": \"Dutch\"\n  },\n  \"photo\": \"https://api.loket.nl/v2/providers/employers/employees/{employeeId}/photo/{version}\",\n  \"placeOfBirth\": \"Amsterdam\",\n  \"prefix\": \"van\",\n  \"prefixPartner\": \"van de\",\n  \"title\": {\n    \"key\": 2,\n    \"value\": \"e.g. Msc, PHD or Baron\"\n  }\n}",
			"routing": {
				"send": {
					"property": "personalDetails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Revoke Employee Self Service Access On",
			"name": "revokeEmployeeSelfServiceAccessOn",
			"type": "string",
			"default": "2018-10-23",
			"description": "The date on which the Employee will be automatically blocked.\n",
			"routing": {
				"send": {
					"property": "revokeEmployeeSelfServiceAccessOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Status Employee Self Service",
			"name": "statusEmployeeSelfService",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Blocked\"\n}",
			"description": "The status of the accessability of the Employee Self Service application. In case ESS is not relevant the object will be returned as NULL. Possible values can be acquired via the metadata endpoint",
			"routing": {
				"send": {
					"property": "statusEmployeeSelfService",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Travel",
			"name": "travel",
			"type": "json",
			"default": "{\n  \"travelDistanceToWork\": 32\n}",
			"routing": {
				"send": {
					"property": "travel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Employee By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/{employeeId}/citizenservicenumber",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Citizen Service Number By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Citizen Service Number By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Citizen Service Number By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Citizen Service Number By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/{employeeId}/citizenservicenumber",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Citizen Service Number By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Citizen Service Number By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Citizen Service Number By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Citizen Service Number By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Input the value acquired in the ETag header for concurrency control. Please note this is optional (and not recommended for most types of integrations).",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Citizen Service Number By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Citizen Service Number",
			"name": "citizenServiceNumber",
			"type": "string",
			"default": "042168588",
			"description": "The social security number of the employee used in communication with the Dutch tax authorities. The number has to be a valid Dutch citizen service number (BSN).",
			"routing": {
				"send": {
					"property": "citizenServiceNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Put Citizen Service Number By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/employees/{employeeId}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Delete Employee Photo By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Delete Employee Photo By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Delete Employee Photo By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Delete Employee Photo By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/{employeeId}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employee Photo By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employee Photo By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employee Photo By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employee Photo By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/{employeeId}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Post Employee Photo By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Post Employee Photo By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Post Employee Photo By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Post Employee Photo By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Data",
			"name": "data",
			"type": "string",
			"default": "YQ==",
			"description": "base64 encoded document file.",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Post Employee Photo By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Mime Type",
			"name": "mimeType",
			"type": "string",
			"default": "image/jpeg",
			"description": "The mimetype of the data.",
			"routing": {
				"send": {
					"property": "mimeType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Post Employee Photo By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/{employeeId}/photo/{version}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employee Photo By Employee ID And Version"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employee Photo By Employee ID And Version"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employee Photo By Employee ID And Version"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employee Photo By Employee ID And Version"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": "An optional guid generated for caching. The value does not influence the output of this function. The Employee resource returns the URI of the current photo.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employee Photo By Employee ID And Version"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/employees/{employeeId}/revokeEmployeeSelfServiceAccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Patch Revoke Employee Self Service Access By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Patch Revoke Employee Self Service Access By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Patch Revoke Employee Self Service Access By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Patch Revoke Employee Self Service Access By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Revoke Employee Self Service Access On",
			"name": "revokeEmployeeSelfServiceAccessOn",
			"type": "string",
			"default": "2018-10-23",
			"description": "The date on which the Employees access to ESS (werknemer.loket) will be automatically revoked.\n",
			"routing": {
				"send": {
					"property": "revokeEmployeeSelfServiceAccessOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Patch Revoke Employee Self Service Access By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/employees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employees By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "The unique identifier of the employer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employees By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employees By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output\n\nThe default option is `application/json;version=yyyy-MM-dd`. For the export functionality two other options are supporten:\n  * text/csv;version=yyyy-MM-dd\n  * application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;version=yyyy-MM-dd",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employees By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Filter the collection",
			"default": "cancellationPeriodTimeUnit.key eq 4",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employees By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"description": "Order the collection on one or more fields",
			"default": "-companyName,address.houseNumber",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employees By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Specifies which page should be returned",
			"default": 2,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employees By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Specifies the number of objects per page",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employees By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "X Report Input",
			"name": "X-ReportInput",
			"description": "Allows the user set what values are returnd in the \"export\" (csv or excel).\n",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-ReportInput": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee"
					],
					"operation": [
						"Get Employees By Employer ID"
					]
				}
			}
		},
];
