import type { INodeProperties } from 'n8n-workflow';

export const employerUserNotificationSettingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Notification Settings"
					]
				}
			},
			"options": [
				{
					"name": "Get Employer User Notification Settings By User ID",
					"value": "Get Employer User Notification Settings By User ID",
					"action": "The notification settings for the user",
					"description": "__Activity name :__ GetEmployerUserNotificationSettingsByUserId \n\n\n List the configuration per notification for the user\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/users/{{$parameter[\"userId\"]}}/notificationsettings"
						}
					}
				},
				{
					"name": "Patch Employer User Notification Settings By User ID",
					"value": "Patch Employer User Notification Settings By User ID",
					"action": "Manage the employer user notification settings",
					"description": "__Activity name :__ PatchEmployerUserNotificationSettingsByUserId\n\nManage the employer user notifications and `notificationSet`.\n\n__Note:__ Currently the `notificationSet` doesnt do anything in regard to which notifications are enabled or disabled.  It only functions as a guide to the GUI to visualize and save the notifications linked to the `notificationSet`\n\nOnly the changes supplied are processed existing records not supplied in the request body will be left unchanged.  e.g. If three notifications are enabled for the user and a patch is performed with in the body one new notification with the `isEnabled` = true. The result will be that the user has 4 enabled notifications.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/users/{{$parameter[\"userId\"]}}/notificationsettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/users/{userId}/notificationsettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Notification Settings"
					],
					"operation": [
						"Get Employer User Notification Settings By User ID"
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
						"Employer User Notification Settings"
					],
					"operation": [
						"Get Employer User Notification Settings By User ID"
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
						"Employer User Notification Settings"
					],
					"operation": [
						"Get Employer User Notification Settings By User ID"
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
						"Employer User Notification Settings"
					],
					"operation": [
						"Get Employer User Notification Settings By User ID"
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
						"Employer User Notification Settings"
					],
					"operation": [
						"Get Employer User Notification Settings By User ID"
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
						"Employer User Notification Settings"
					],
					"operation": [
						"Get Employer User Notification Settings By User ID"
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
						"Employer User Notification Settings"
					],
					"operation": [
						"Get Employer User Notification Settings By User ID"
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
						"Employer User Notification Settings"
					],
					"operation": [
						"Get Employer User Notification Settings By User ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/users/{userId}/notificationsettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Notification Settings"
					],
					"operation": [
						"Patch Employer User Notification Settings By User ID"
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
						"Employer User Notification Settings"
					],
					"operation": [
						"Patch Employer User Notification Settings By User ID"
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
						"Employer User Notification Settings"
					],
					"operation": [
						"Patch Employer User Notification Settings By User ID"
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
						"Employer User Notification Settings"
					],
					"operation": [
						"Patch Employer User Notification Settings By User ID"
					]
				}
			}
		},
		{
			"displayName": "Notification Set",
			"name": "notificationSet",
			"type": "json",
			"default": "{\n  \"description\": \"Salarisadministrateur\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"routing": {
				"send": {
					"property": "notificationSet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Notification Settings"
					],
					"operation": [
						"Patch Employer User Notification Settings By User ID"
					]
				}
			}
		},
		{
			"displayName": "Notifications",
			"name": "notifications",
			"type": "json",
			"default": "[\n  {\n    \"createNumberOfDaysBeforeEvent\": 30,\n    \"notificationType\": {\n      \"key\": 3,\n      \"value\": \"Start of employment\"\n    },\n    \"receiveDepartmentSignalsOnly\": false,\n    \"sendMailWhenNotificationIsCreated\": false\n  }\n]",
			"routing": {
				"send": {
					"property": "notifications",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Notification Settings"
					],
					"operation": [
						"Patch Employer User Notification Settings By User ID"
					]
				}
			}
		},
];
