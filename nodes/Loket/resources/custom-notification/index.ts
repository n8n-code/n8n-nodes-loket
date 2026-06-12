import type { INodeProperties } from 'n8n-workflow';

export const customNotificationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					]
				}
			},
			"options": [
				{
					"name": "Delete Custom Notification By Custom Notification ID",
					"value": "Delete Custom Notification By Custom Notification ID",
					"action": "Delete a custom notification record",
					"description": "__Activity name :__ DeleteCustomNotificationByCustomNotificationId\n\nDelete an existing custom notification record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/customnotifications/{{$parameter[\"customNotificationId\"]}}"
						}
					}
				},
				{
					"name": "Get Custom Notification By Custom Notification ID",
					"value": "Get Custom Notification By Custom Notification ID",
					"action": "Details of a custom notification",
					"description": "__Activity name :__ GetCustomNotificationByCustomNotificationId\n\nGet the details of a custom notification\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/customnotifications/{{$parameter[\"customNotificationId\"]}}"
						}
					}
				},
				{
					"name": "Put Custom Notification By Custom Notification ID",
					"value": "Put Custom Notification By Custom Notification ID",
					"action": "Edit a custom notification record",
					"description": "__Activity name :__ PutCustomNotificationByCustomNotificationId\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding ` / metadata ` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/customnotifications/{{$parameter[\"customNotificationId\"]}}"
						}
					}
				},
				{
					"name": "Get Custom Notifications By Employment ID",
					"value": "Get Custom Notifications By Employment ID",
					"action": "List custom notification",
					"description": "__Activity name :__ GetCustomNotificationsByEmploymentId\nGet a list of the custom notifications of the employment.\n__Note:__ custom notifications are user defined for a specific employment.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/customnotifications"
						}
					}
				},
				{
					"name": "Post Custom Notification By Employment ID",
					"value": "Post Custom Notification By Employment ID",
					"action": "Add a custom notification for an employment",
					"description": "__Activity name :__ PostCustomNotificationByEmploymentId\n\n__Metadata:__ Possible options for fields of the type 'metadata' can be acquired(GET)by adding `/metadata` to the POST URL.\n\n__Defaults:__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/customnotifications"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/customnotifications/{customNotificationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Delete Custom Notification By Custom Notification ID"
					]
				}
			}
		},
		{
			"displayName": "Custom Notification ID",
			"name": "customNotificationId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Delete Custom Notification By Custom Notification ID"
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
						"Custom Notification"
					],
					"operation": [
						"Delete Custom Notification By Custom Notification ID"
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
						"Custom Notification"
					],
					"operation": [
						"Delete Custom Notification By Custom Notification ID"
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
						"Custom Notification"
					],
					"operation": [
						"Delete Custom Notification By Custom Notification ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/customnotifications/{customNotificationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notification By Custom Notification ID"
					]
				}
			}
		},
		{
			"displayName": "Custom Notification ID",
			"name": "customNotificationId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notification By Custom Notification ID"
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
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notification By Custom Notification ID"
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
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notification By Custom Notification ID"
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
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notification By Custom Notification ID"
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
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notification By Custom Notification ID"
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
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notification By Custom Notification ID"
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
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notification By Custom Notification ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/customnotifications/{customNotificationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Put Custom Notification By Custom Notification ID"
					]
				}
			}
		},
		{
			"displayName": "Custom Notification ID",
			"name": "customNotificationId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Put Custom Notification By Custom Notification ID"
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
						"Custom Notification"
					],
					"operation": [
						"Put Custom Notification By Custom Notification ID"
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
						"Custom Notification"
					],
					"operation": [
						"Put Custom Notification By Custom Notification ID"
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
						"Custom Notification"
					],
					"operation": [
						"Put Custom Notification By Custom Notification ID"
					]
				}
			}
		},
		{
			"displayName": "Expiration Date",
			"name": "expirationDate",
			"type": "string",
			"default": "2021-01-23",
			"description": "The date on which the Notification will expire.",
			"routing": {
				"send": {
					"property": "expirationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Put Custom Notification By Custom Notification ID"
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
						"Custom Notification"
					],
					"operation": [
						"Put Custom Notification By Custom Notification ID"
					]
				}
			}
		},
		{
			"displayName": "Notification Date",
			"name": "notificationDate",
			"type": "string",
			"default": "2021-01-01",
			"description": "The date on which the first notification occurs.",
			"routing": {
				"send": {
					"property": "notificationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Put Custom Notification By Custom Notification ID"
					]
				}
			}
		},
		{
			"displayName": "Notification Text",
			"name": "notificationText",
			"type": "string",
			"default": "Signal renew document",
			"description": "The description of the signal",
			"routing": {
				"send": {
					"property": "notificationText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Put Custom Notification By Custom Notification ID"
					]
				}
			}
		},
		{
			"displayName": "Recurrence Pattern",
			"name": "recurrencePattern",
			"type": "json",
			"default": "{\n  \"numberOfRepetitionsAfterFirstNotification\": 4,\n  \"recurrenceNumber\": 2,\n  \"recurrencePeriod\": {\n    \"key\": 2,\n    \"value\": \"Weeks\"\n  }\n}",
			"description": "Define a pattern for repeating the notification. This pattern is used to create Notifications after the initial notification as defined in the notificationDate.\n",
			"routing": {
				"send": {
					"property": "recurrencePattern",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Put Custom Notification By Custom Notification ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/customnotifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notifications By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notifications By Employment ID"
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
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notifications By Employment ID"
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
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notifications By Employment ID"
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
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notifications By Employment ID"
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
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notifications By Employment ID"
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
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notifications By Employment ID"
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
						"Custom Notification"
					],
					"operation": [
						"Get Custom Notifications By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/customnotifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Post Custom Notification By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Post Custom Notification By Employment ID"
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
						"Custom Notification"
					],
					"operation": [
						"Post Custom Notification By Employment ID"
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
						"Custom Notification"
					],
					"operation": [
						"Post Custom Notification By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Expiration Date",
			"name": "expirationDate",
			"type": "string",
			"default": "2021-01-23",
			"description": "The date on which the Notification will expire.",
			"routing": {
				"send": {
					"property": "expirationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Post Custom Notification By Employment ID"
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
						"Custom Notification"
					],
					"operation": [
						"Post Custom Notification By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Notification Date",
			"name": "notificationDate",
			"type": "string",
			"default": "2021-01-01",
			"description": "The date on which the first notification occurs.",
			"routing": {
				"send": {
					"property": "notificationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Post Custom Notification By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Notification Text",
			"name": "notificationText",
			"type": "string",
			"default": "Signal renew document",
			"description": "The description of the signal",
			"routing": {
				"send": {
					"property": "notificationText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Post Custom Notification By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Recurrence Pattern",
			"name": "recurrencePattern",
			"type": "json",
			"default": "{\n  \"numberOfRepetitionsAfterFirstNotification\": 4,\n  \"recurrenceNumber\": 2,\n  \"recurrencePeriod\": {\n    \"key\": 2,\n    \"value\": \"Weeks\"\n  }\n}",
			"description": "Define a pattern for repeating the notification. This pattern is used to create Notifications after the initial notification as defined in the notificationDate.\n",
			"routing": {
				"send": {
					"property": "recurrencePattern",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Notification"
					],
					"operation": [
						"Post Custom Notification By Employment ID"
					]
				}
			}
		},
];
