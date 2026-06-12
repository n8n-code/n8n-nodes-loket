import type { INodeProperties } from 'n8n-workflow';

export const employerUserDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					]
				}
			},
			"options": [
				{
					"name": "Delete Employer User By User ID",
					"value": "Delete Employer User By User ID",
					"action": "Delete a specific user record",
					"description": "__Activity name :__ DeleteEmployerUserByUserId\n\nDelete an existing user\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/users/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Get Employer User By User ID",
					"value": "Get Employer User By User ID",
					"action": "Details of an user",
					"description": "__Activity name :__ GetEmployerUserByUserId\n\nGet the details of an user\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/users/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Patch Employer User Invite By User ID",
					"value": "Patch Employer User Invite By User ID",
					"action": "Resend or change the status of an invite for an employer user.",
					"description": "__Activity name :__ PatchEmployerUserInviteByUserId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired via /providers/employers/{employerId}/users/metadata\n\n__Defaults :__ No defaults\n\nResend or change the status of an invite for an employer user. \n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/users/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Put Employer User By User ID",
					"value": "Put Employer User By User ID",
					"action": "Edit the details of an user",
					"description": "__Activity name :__ PutEmployerUserByUserId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n\nEdit the details of an user\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/users/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Get Employer Users By Employer ID",
					"value": "Get Employer Users By Employer ID",
					"action": "List of users for an employer",
					"description": "__Activity name :__ GetEmployerUsersByEmployerId\n\n\n Get the list of users of the employer\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/users"
						}
					}
				},
				{
					"name": "Post Employer User By Employer ID",
					"value": "Post Employer User By Employer ID",
					"action": "Create an SSO or Azure AD user for an employer",
					"description": "__Activity name :__ PostEmployerUserByEmployerId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL. \n\nAdd an SSO or Azure AD user for an employer. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/users"
						}
					}
				},
				{
					"name": "Post Invite Employer User By Employer ID",
					"value": "Post Invite Employer User By Employer ID",
					"action": "Send an invite for an employer user",
					"description": "__Activity name :__ PostInviteEmployerUserByEmployerId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired via /providers/employers/{employerId}/users/metadata\n\n__Defaults :__ Default values for a new object can be acquired by via /providers/employers/{employerId}/users/defaults\n\nSend an invite to an user for an employer. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/users/invite"
						}
					}
				},
				{
					"name": "Post Link Existing User By Employer ID",
					"value": "Post Link Existing User By Employer ID",
					"action": "Link an existing employer user to this employer.",
					"description": "__Activity name :__ PostLinkExistingUserByEmployerId\n\n__Metadata :__  No metadata endpoint\n\n__Defaults :__ No default values \n\nLink an existing employer user to this employer. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/users/link"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Delete Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "The unique identifier of an user",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Delete Employer User By User ID"
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
						"Employer User"
					],
					"operation": [
						"Delete Employer User By User ID"
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
						"Employer User"
					],
					"operation": [
						"Delete Employer User By User ID"
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
						"Employer User"
					],
					"operation": [
						"Delete Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Get Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "The unique identifier of an user",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Get Employer User By User ID"
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
						"Employer User"
					],
					"operation": [
						"Get Employer User By User ID"
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
						"Employer User"
					],
					"operation": [
						"Get Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Patch Employer User Invite By User ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "The unique identifier of an user",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Patch Employer User Invite By User ID"
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
						"Employer User"
					],
					"operation": [
						"Patch Employer User Invite By User ID"
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
						"Employer User"
					],
					"operation": [
						"Patch Employer User Invite By User ID"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "action",
			"type": "options",
			"default": "Resend",
			"description": "indicates the action to perform.",
			"options": [
				{
					"name": "Resend",
					"value": "Resend"
				},
				{
					"name": "Revoke",
					"value": "Revoke"
				}
			],
			"routing": {
				"send": {
					"property": "action",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Patch Employer User Invite By User ID"
					]
				}
			}
		},
		{
			"displayName": "Destination For Secret",
			"name": "destinationForSecret",
			"type": "string",
			"default": "0612345678",
			"description": "The destination phonenumber to sent the secret to during registration.",
			"routing": {
				"send": {
					"property": "destinationForSecret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Patch Employer User Invite By User ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "The unique identifier of an user",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
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
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
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
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
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
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "Access Status",
			"name": "accessStatus",
			"type": "json",
			"default": "{\n  \"key\": 3,\n  \"value\": \"Has access to Client\"\n}",
			"description": "indicates the access status of the user.",
			"routing": {
				"send": {
					"property": "accessStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "Azure Active Directory",
			"name": "azureActiveDirectory",
			"type": "json",
			"default": "{\n  \"tenant\": {\n    \"description\": \"Customer X Azure AD\",\n    \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n  },\n  \"userId\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"routing": {
				"send": {
					"property": "azureActiveDirectory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "Contact Information",
			"name": "contactInformation",
			"type": "json",
			"default": "{\n  \"emailAddress\": \"info@loket.nl\",\n  \"phoneNumber\": \"+31 13-1234567\",\n  \"placeOfEmployment\": \"Amsterdam office\"\n}",
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
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "Date Time Creation",
			"name": "dateTimeCreation",
			"type": "string",
			"default": "2020-01-19",
			"description": "The date on which the user was created",
			"routing": {
				"send": {
					"property": "dateTimeCreation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "Date Time Last Login",
			"name": "dateTimeLastLogin",
			"type": "string",
			"default": "2021-01-19",
			"description": "The date on which the user loged in for the last time",
			"routing": {
				"send": {
					"property": "dateTimeLastLogin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "Has Access To Payrolling Test Data",
			"name": "hasAccessToPayrollingTestData",
			"type": "boolean",
			"default": false,
			"description": "Indicates if the user has access to data for payrolling test years",
			"routing": {
				"send": {
					"property": "hasAccessToPayrollingTestData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "Has Integrations",
			"name": "hasIntegrations",
			"type": "boolean",
			"default": false,
			"description": "Indicates if the user has integrations with clients other that Loket",
			"routing": {
				"send": {
					"property": "hasIntegrations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "Has Multi Factor Authentication",
			"name": "hasMultiFactorAuthentication",
			"type": "boolean",
			"default": false,
			"description": "Indicates if the user has multi factor authentication enabled\n\nCan only be changed from true to false.",
			"routing": {
				"send": {
					"property": "hasMultiFactorAuthentication",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
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
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "Is Department Manager",
			"name": "isDepartmentManager",
			"type": "boolean",
			"default": false,
			"description": "Indicates if the user is a department manager",
			"routing": {
				"send": {
					"property": "isDepartmentManager",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "Is Linked To Multiple Employers",
			"name": "isLinkedToMultipleEmployers",
			"type": "boolean",
			"default": false,
			"description": "Indicates if the user has access to multiple employer.",
			"routing": {
				"send": {
					"property": "isLinkedToMultipleEmployers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "Login Method",
			"name": "loginMethod",
			"type": "json",
			"default": "{\n  \"key\": 3,\n  \"value\": \"Only via SSO\"\n}",
			"description": "The allowedlogin method for the user",
			"routing": {
				"send": {
					"property": "loginMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "Personal Details",
			"name": "personalDetails",
			"type": "json",
			"default": "{\n  \"firstName\": \"Susan\",\n  \"initials\": \"S.L.\",\n  \"lastName\": \"Bergen\",\n  \"prefix\": \"van\"\n}",
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
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "Two Factor Authentication Required",
			"name": "twoFactorAuthenticationRequired",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether two factor authentication is required for the user. This setting is only available for login method: Via website en SSO ",
			"routing": {
				"send": {
					"property": "twoFactorAuthenticationRequired",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "User Custom Specified Role",
			"name": "userCustomSpecifiedRole",
			"type": "string",
			"default": "Secretariaat medewerker",
			"description": "Further specification of the user role.\n",
			"routing": {
				"send": {
					"property": "userCustomSpecifiedRole",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "User Name",
			"name": "userName",
			"type": "string",
			"default": "User42",
			"description": "The username",
			"routing": {
				"send": {
					"property": "userName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "User Specified Role",
			"name": "userSpecifiedRole",
			"type": "json",
			"default": "{\n  \"key\": 3,\n  \"value\": \"Salarisadministrateur\"\n}",
			"description": "The Role which the user has specified.",
			"routing": {
				"send": {
					"property": "userSpecifiedRole",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Put Employer User By User ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Get Employer Users By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Get Employer Users By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Get Employer Users By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Get Employer Users By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Get Employer Users By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Get Employer Users By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Get Employer Users By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Get Employer Users By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Post Employer User By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Post Employer User By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Post Employer User By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Post Employer User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Azure Active Directory",
			"name": "azureActiveDirectory",
			"type": "json",
			"default": "{\n  \"externalUserId\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"tenantId\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"userName\": \"User123\"\n}",
			"routing": {
				"send": {
					"property": "azureActiveDirectory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Post Employer User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Contact Information",
			"name": "contactInformation",
			"type": "json",
			"default": "{\n  \"emailAddress\": \"info@loket.nl\",\n  \"phoneNumber\": \"+31 13-1234567\",\n  \"placeOfEmployment\": \"Amsterdam office\"\n}",
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
						"Employer User"
					],
					"operation": [
						"Post Employer User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Has Access To Payrolling Test Data",
			"name": "hasAccessToPayrollingTestData",
			"type": "boolean",
			"default": false,
			"description": "Indicates if the user has access to data for payrolling test years",
			"routing": {
				"send": {
					"property": "hasAccessToPayrollingTestData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Post Employer User By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Post Employer User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Login Method",
			"name": "loginMethod",
			"type": "json",
			"default": "{\n  \"key\": 3,\n  \"value\": \"Only via SSO\"\n}",
			"description": "The allowedlogin method for the user",
			"routing": {
				"send": {
					"property": "loginMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Post Employer User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Personal Details",
			"name": "personalDetails",
			"type": "json",
			"default": "{\n  \"initials\": \"S.L.\",\n  \"lastName\": \"Bergen\",\n  \"prefix\": \"van\"\n}",
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
						"Employer User"
					],
					"operation": [
						"Post Employer User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Sso Account",
			"name": "ssoAccount",
			"type": "json",
			"default": "{\n  \"password\": \"Password%6\",\n  \"userName\": \"Customer X Azure AD\"\n}",
			"routing": {
				"send": {
					"property": "ssoAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Post Employer User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/users/invite",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Post Invite Employer User By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Post Invite Employer User By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Post Invite Employer User By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Post Invite Employer User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Contact Information",
			"name": "contactInformation",
			"type": "json",
			"default": "{\n  \"emailAddress\": \"info@loket.nl\",\n  \"phoneNumber\": \"+31 13-1234567\",\n  \"placeOfEmployment\": \"Amsterdam office\"\n}",
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
						"Employer User"
					],
					"operation": [
						"Post Invite Employer User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Destination For Secret",
			"name": "destinationForSecret",
			"type": "string",
			"default": "0612345678",
			"description": "The destination phonenumber to sent the secret to during registration.",
			"routing": {
				"send": {
					"property": "destinationForSecret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Post Invite Employer User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Has Access To Payrolling Test Data",
			"name": "hasAccessToPayrollingTestData",
			"type": "boolean",
			"default": false,
			"description": "Indicates if the user has access to data for payrolling test years",
			"routing": {
				"send": {
					"property": "hasAccessToPayrollingTestData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Post Invite Employer User By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Post Invite Employer User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Personal Details",
			"name": "personalDetails",
			"type": "json",
			"default": "{\n  \"initials\": \"S.L.\",\n  \"lastName\": \"Bergen\",\n  \"prefix\": \"van\"\n}",
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
						"Employer User"
					],
					"operation": [
						"Post Invite Employer User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Two Factor Authentication Required",
			"name": "twoFactorAuthenticationRequired",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether two factor authentication is required for the user. This setting is only available for login method: Via website en SSO ",
			"routing": {
				"send": {
					"property": "twoFactorAuthenticationRequired",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Post Invite Employer User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/users/link",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Post Link Existing User By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Post Link Existing User By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Post Link Existing User By Employer ID"
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
						"Employer User"
					],
					"operation": [
						"Post Link Existing User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Departments",
			"name": "departments",
			"type": "json",
			"default": "[\n  \"904d6856-6034-4624-bcbc-886188c115c5\"\n]",
			"routing": {
				"send": {
					"property": "departments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Post Link Existing User By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User"
					],
					"operation": [
						"Post Link Existing User By Employer ID"
					]
				}
			}
		},
];
