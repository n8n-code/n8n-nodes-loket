import type { INodeProperties } from 'n8n-workflow';

export const applicationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Application"
					]
				}
			},
			"options": [
				{
					"name": "Get Application Authorizations By Application ID",
					"value": "Get Application Authorizations By Application ID",
					"action": "Authorizations for the application",
					"description": "__Activity name :__ GetApplicationAuthorizationsByApplicationId\n\nGet the authorizations of the application.\nWe expose which activities are accessable by the application and which \"rechten\" and \"producten\" are required for the user/employer to enable those activities.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"applicationId\"]}}/authorizations"
						}
					}
				},
				{
					"name": "Get Application Logo",
					"value": "Get Application Logo",
					"action": "Download the application logo",
					"description": "__Activity name :__ GetApplicationLogo\n\nThis activity is listed twice in the documentation due to the specified version caching path parameter. Including or exluding this parameter results in slightly different behaviour.\n\n__Caching:__ This resource changes very infrequently and can be cached for a longer time.\n\nGet the logo of the application. In case no logo is know the service will return a 404.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"applicationId\"]}}/logo"
						}
					}
				},
				{
					"name": "Get Available Applications By Employer ID",
					"value": "Get Available Applications By Employer ID",
					"action": "List of all the applications available to the employer",
					"description": "__Activity name:__ GetAvailableApplicationsByEmployerId\n    \n\nList of all the applications available to the employer.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/applications"
						}
					}
				},
				{
					"name": "Get Linked Users By Employer ID And Application ID",
					"value": "Get Linked Users By Employer ID And Application ID",
					"action": "List of all the users linking the applications and the employer",
					"description": "__Activity name:__ GetLinkedUsersByEmployerIdAndApplicationId\n    \n\nList of all users that are configred to have both access to the employer and have an connection with the application.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/applications/{{$parameter[\"applicationId\"]}}/users"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /applications/{applicationId}/authorizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Application"
					],
					"operation": [
						"Get Application Authorizations By Application ID"
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
						"Application"
					],
					"operation": [
						"Get Application Authorizations By Application ID"
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
						"Application"
					],
					"operation": [
						"Get Application Authorizations By Application ID"
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
						"Application"
					],
					"operation": [
						"Get Application Authorizations By Application ID"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{applicationId}/logo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Application"
					],
					"operation": [
						"Get Application Logo"
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
						"Application"
					],
					"operation": [
						"Get Application Logo"
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
						"Application"
					],
					"operation": [
						"Get Application Logo"
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
						"Application"
					],
					"operation": [
						"Get Application Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/applications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Application"
					],
					"operation": [
						"Get Available Applications By Employer ID"
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
						"Application"
					],
					"operation": [
						"Get Available Applications By Employer ID"
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
						"Application"
					],
					"operation": [
						"Get Available Applications By Employer ID"
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
						"Application"
					],
					"operation": [
						"Get Available Applications By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/applications/{applicationId}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Application"
					],
					"operation": [
						"Get Linked Users By Employer ID And Application ID"
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
						"Application"
					],
					"operation": [
						"Get Linked Users By Employer ID And Application ID"
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
						"Application"
					],
					"operation": [
						"Get Linked Users By Employer ID And Application ID"
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
						"Application"
					],
					"operation": [
						"Get Linked Users By Employer ID And Application ID"
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
						"Application"
					],
					"operation": [
						"Get Linked Users By Employer ID And Application ID"
					]
				}
			}
		},
];
