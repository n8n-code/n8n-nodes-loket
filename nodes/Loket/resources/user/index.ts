import type { INodeProperties } from 'n8n-workflow';

export const userDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					]
				}
			},
			"options": [
				{
					"name": "Get Employer User Integrations By User ID",
					"value": "Get Employer User Integrations By User ID",
					"action": "List of all the integrations for the employer user",
					"description": "__Activity name:__ GetEmployerUserIntegrationsByUserId\n    \n\nList of all the integrations for the employer user\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/users/{{$parameter[\"userId\"]}}/integrations"
						}
					}
				},
				{
					"name": "Delete Employer User Integration By User ID And Application ID",
					"value": "Delete Employer User Integration By User ID And Application ID",
					"action": "Delete an integration",
					"description": "__Activity name:__ DeleteEmployerUserIntegrationByUserIdAndApplicationId\n\nDelete an integration\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/users/{{$parameter[\"userId\"]}}/integrations/{{$parameter[\"applicationId\"]}}"
						}
					}
				},
				{
					"name": "Put Employer User Integration By Integration ID",
					"value": "Put Employer User Integration By Integration ID",
					"action": "Change an integration",
					"description": "__Activity name :__ PutEmployerUserIntegrationByUserIdAndApplicationId\n\nChange the integration\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/users/{{$parameter[\"userId\"]}}/integrations/{{$parameter[\"applicationId\"]}}"
						}
					}
				},
				{
					"name": "Get Employer User Integration Logo By User ID And Application ID",
					"value": "Get Employer User Integration Logo By User ID And Application ID",
					"action": "Download the application logo",
					"description": "__Activity name :__ GetEmployerUserIntegrationLogoByUserIdAndApplicationId\n\nThis activity is listed twice in the documentation due to the specified version caching path parameter. Including or exluding this parameter results in slightly different behaviour.\n\n__Caching:__ This resource changes very infrequently and can be cached for a longer time.\n\nGet the logo of the application. In case no logo is know the service will return a 404.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/users/{{$parameter[\"userId\"]}}/integrations/{{$parameter[\"applicationId\"]}}/logo"
						}
					}
				},
				{
					"name": "Get User By Token",
					"value": "Get User By Token",
					"action": "Get current user",
					"description": "__Activity name:__ GetUserByToken\n    \n\nProperties of the current user.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user"
						}
					}
				},
				{
					"name": "Put User By Token",
					"value": "Put User By Token",
					"action": "Edit current user",
					"description": "__Activity name:__ PutUserByToken\n    \n\nEdit some of the properties of the current user. Metadata can be acquired by adding /metadata to the path.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/user"
						}
					}
				},
				{
					"name": "Delete User Photo By Token",
					"value": "Delete User Photo By Token",
					"action": "Delete user photo",
					"description": "__Activity name :__ DeleteUserPhotoByToken\n\nPhoto of the user to use as an avatar/profile picture\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/user/photo"
						}
					}
				},
				{
					"name": "Get User Photo By Token",
					"value": "Get User Photo By Token",
					"action": "Photo of an user",
					"description": "__Activity name :__ GetUserPhotoByToken\n\nPhoto of the user to use as an avatar/profile picture\n\n__Caching:__ This resource changes very infrequently and can be cached for a longer time.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/photo"
						}
					}
				},
				{
					"name": "Post User Photo By Token",
					"value": "Post User Photo By Token",
					"action": "Post user photo",
					"description": "__Activity name :__ PostUserPhotoByToken\n\nPhoto of the user to use as an avatar/profile picture\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/user/photo"
						}
					}
				},
				{
					"name": "Get Integrations By Bearer Token",
					"value": "Get Integrations By Bearer Token",
					"action": "List of all the integrations for the logon user",
					"description": "__Activity name:__ GetIntegrationsByBearerToken\n    \n\nList of all the integrations for the logon user\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/integrations"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/users/{userId}/integrations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Employer User Integrations By User ID"
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
						"User"
					],
					"operation": [
						"Get Employer User Integrations By User ID"
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
						"User"
					],
					"operation": [
						"Get Employer User Integrations By User ID"
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
						"User"
					],
					"operation": [
						"Get Employer User Integrations By User ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/users/{userId}/integrations/{applicationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Delete Employer User Integration By User ID And Application ID"
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
						"User"
					],
					"operation": [
						"Delete Employer User Integration By User ID And Application ID"
					]
				}
			}
		},
		{
			"displayName": "Application ID",
			"name": "applicationId",
			"required": true,
			"description": "The unique identifier of an integration",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Delete Employer User Integration By User ID And Application ID"
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
						"User"
					],
					"operation": [
						"Delete Employer User Integration By User ID And Application ID"
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
						"User"
					],
					"operation": [
						"Delete Employer User Integration By User ID And Application ID"
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
						"User"
					],
					"operation": [
						"Delete Employer User Integration By User ID And Application ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/users/{userId}/integrations/{applicationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Put Employer User Integration By Integration ID"
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
						"User"
					],
					"operation": [
						"Put Employer User Integration By Integration ID"
					]
				}
			}
		},
		{
			"displayName": "Application ID",
			"name": "applicationId",
			"required": true,
			"description": "The unique identifier of an integration",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Put Employer User Integration By Integration ID"
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
						"User"
					],
					"operation": [
						"Put Employer User Integration By Integration ID"
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
						"User"
					],
					"operation": [
						"Put Employer User Integration By Integration ID"
					]
				}
			}
		},
		{
			"displayName": "Application",
			"name": "application",
			"type": "json",
			"default": "{\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"isBlocked\": true,\n  \"logo\": \"https://api.loket.nl/v2/application/{applicationId}/logo/{version}\",\n  \"name\": \"ABC international\"\n}",
			"routing": {
				"send": {
					"property": "application",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Put Employer User Integration By Integration ID"
					]
				}
			}
		},
		{
			"displayName": "Created On",
			"name": "createdOn",
			"type": "string",
			"default": "2018-05-08T15:16:49+02:00",
			"description": "The time the integration was succesfully initiated",
			"routing": {
				"send": {
					"property": "createdOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Put Employer User Integration By Integration ID"
					]
				}
			}
		},
		{
			"displayName": "Is Blocked",
			"name": "isBlocked",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the application user combination is blocked (for this single user)",
			"routing": {
				"send": {
					"property": "isBlocked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Put Employer User Integration By Integration ID"
					]
				}
			}
		},
		{
			"displayName": "Last Login",
			"name": "lastLogin",
			"type": "string",
			"default": "2018-05-08T15:16:49+02:00",
			"description": "The time the integration was last active",
			"routing": {
				"send": {
					"property": "lastLogin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Put Employer User Integration By Integration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/users/{userId}/integrations/{applicationId}/logo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Employer User Integration Logo By User ID And Application ID"
					]
				}
			}
		},
		{
			"displayName": "Application ID",
			"name": "applicationId",
			"required": true,
			"description": "The unique identifier of an application",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Employer User Integration Logo By User ID And Application ID"
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
						"User"
					],
					"operation": [
						"Get Employer User Integration Logo By User ID And Application ID"
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
						"User"
					],
					"operation": [
						"Get Employer User Integration Logo By User ID And Application ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Employer User Integration Logo By User ID And Application ID"
					]
				}
			}
		},
		{
			"displayName": "GET /user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User By Token"
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
						"User"
					],
					"operation": [
						"Get User By Token"
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
						"User"
					],
					"operation": [
						"Get User By Token"
					]
				}
			}
		},
		{
			"displayName": "PUT /user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Put User By Token"
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
						"User"
					],
					"operation": [
						"Put User By Token"
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
						"User"
					],
					"operation": [
						"Put User By Token"
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
						"User"
					],
					"operation": [
						"Put User By Token"
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
						"User"
					],
					"operation": [
						"Put User By Token"
					]
				}
			}
		},
		{
			"displayName": "Photo",
			"name": "photo",
			"type": "string",
			"default": "https://api.loket.nl/v2/user/photo/{version}",
			"description": "A photo of the user to use as a avatar/profile picture. The last part of the returned endpoint is the version of the logo this allows users to cache the image. Changing the value of the version will not influence the output.",
			"routing": {
				"send": {
					"property": "photo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Put User By Token"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "user",
			"type": "json",
			"default": "{\n  \"userCustomSpecifiedRole\": \"Secretariaat medewerker\",\n  \"userSpecifiedRole\": {\n    \"key\": 3,\n    \"value\": \"Salarisadministrateur\"\n  }\n}",
			"routing": {
				"send": {
					"property": "user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Put User By Token"
					]
				}
			}
		},
		{
			"displayName": "DELETE /user/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Delete User Photo By Token"
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
						"User"
					],
					"operation": [
						"Delete User Photo By Token"
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
						"User"
					],
					"operation": [
						"Delete User Photo By Token"
					]
				}
			}
		},
		{
			"displayName": "GET /user/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User Photo By Token"
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
						"User"
					],
					"operation": [
						"Get User Photo By Token"
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
						"User"
					],
					"operation": [
						"Get User Photo By Token"
					]
				}
			}
		},
		{
			"displayName": "POST /user/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Post User Photo By Token"
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
						"User"
					],
					"operation": [
						"Post User Photo By Token"
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
						"User"
					],
					"operation": [
						"Post User Photo By Token"
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
						"User"
					],
					"operation": [
						"Post User Photo By Token"
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
						"User"
					],
					"operation": [
						"Post User Photo By Token"
					]
				}
			}
		},
		{
			"displayName": "GET /users/integrations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Integrations By Bearer Token"
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
						"User"
					],
					"operation": [
						"Get Integrations By Bearer Token"
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
						"User"
					],
					"operation": [
						"Get Integrations By Bearer Token"
					]
				}
			}
		},
];
