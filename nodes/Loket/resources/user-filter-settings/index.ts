import type { INodeProperties } from 'n8n-workflow';

export const userFilterSettingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"User Filter Settings"
					]
				}
			},
			"options": [
				{
					"name": "Get User Filter Settings By Employer ID",
					"value": "Get User Filter Settings By Employer ID",
					"action": "Get user filter settings",
					"description": "__Activity name:__ GetUserFilterSettingsByEmployerId\n    \n\nThe User Filter settings for the current user for the employer. These settings are used by the backend to automaticaly filter the list of employments. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/filtersettings/{{$parameter[\"employerId\"]}}"
						}
					}
				},
				{
					"name": "Put User Filter Settings By Employer ID",
					"value": "Put User Filter Settings By Employer ID",
					"action": "Edit the user filter settings",
					"description": "__Activity name:__ PutUserFilterSettingsByEmployerId\n    \n\nEdit the filter settings for the current user for the employer.\n\nMetadata can be acquired by adding /metadata to the path.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/user/filtersettings/{{$parameter[\"employerId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /user/filtersettings/{employerId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User Filter Settings"
					],
					"operation": [
						"Get User Filter Settings By Employer ID"
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
						"User Filter Settings"
					],
					"operation": [
						"Get User Filter Settings By Employer ID"
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
						"User Filter Settings"
					],
					"operation": [
						"Get User Filter Settings By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User Filter Settings"
					],
					"operation": [
						"Get User Filter Settings By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /user/filtersettings/{employerId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User Filter Settings"
					],
					"operation": [
						"Put User Filter Settings By Employer ID"
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
						"User Filter Settings"
					],
					"operation": [
						"Put User Filter Settings By Employer ID"
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
						"User Filter Settings"
					],
					"operation": [
						"Put User Filter Settings By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User Filter Settings"
					],
					"operation": [
						"Put User Filter Settings By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Filter",
			"name": "employmentFilter",
			"type": "json",
			"default": "{\n  \"filterOnAdministrations\": [\n    {\n      \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n    }\n  ],\n  \"filterOnDepartments\": [\n    {\n      \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "employmentFilter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Filter Settings"
					],
					"operation": [
						"Put User Filter Settings By Employer ID"
					]
				}
			}
		},
];
