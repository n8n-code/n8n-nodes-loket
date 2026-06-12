import type { INodeProperties } from 'n8n-workflow';

export const customHolidayDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Holiday"
					]
				}
			},
			"options": [
				{
					"name": "Delete Custom Holiday By Custom Holiday ID",
					"value": "Delete Custom Holiday By Custom Holiday ID",
					"action": "Delete a custom holiday record",
					"description": "__Activity name :__ DeleteCustomHolidayByCustomHolidayId\n\nDelete an existing custom holiday record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/customholidays/{{$parameter[\"customHolidayId\"]}}"
						}
					}
				},
				{
					"name": "Get Custom Holiday By Custom Holiday ID",
					"value": "Get Custom Holiday By Custom Holiday ID",
					"action": "Details of a custom holiday",
					"description": "__Activity name :__ GetCustomHolidayByCustomHolidayId\n\nGet the details of a custom holiday\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/customholidays/{{$parameter[\"customHolidayId\"]}}"
						}
					}
				},
				{
					"name": "Put Custom Holiday By Custom Holiday ID",
					"value": "Put Custom Holiday By Custom Holiday ID",
					"action": "Edit a custom holiday record",
					"description": "__Activity name :__ PutCustomHolidayByCustomHolidayId\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/customholidays/{{$parameter[\"customHolidayId\"]}}"
						}
					}
				},
				{
					"name": "Get Custom Holidays By Employer ID",
					"value": "Get Custom Holidays By Employer ID",
					"action": "List custom holidays for an employer",
					"description": "__Activity name :__ GetCustomHolidaysByEmployerId\n\nGet a list of the custom holidays for an employer.\n\n__Note:__ The custom holidays defined at the employer level can be used at the employee and employment level.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/customholidays"
						}
					}
				},
				{
					"name": "Post Custom Holiday By Employer ID",
					"value": "Post Custom Holiday By Employer ID",
					"action": "Add a custom holiday for an employer",
					"description": "__Activity name :__ PostCustomHolidayByEmployerId\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/customholidays"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/customholidays/{customHolidayId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Holiday"
					],
					"operation": [
						"Delete Custom Holiday By Custom Holiday ID"
					]
				}
			}
		},
		{
			"displayName": "Custom Holiday ID",
			"name": "customHolidayId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Holiday"
					],
					"operation": [
						"Delete Custom Holiday By Custom Holiday ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Delete Custom Holiday By Custom Holiday ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Delete Custom Holiday By Custom Holiday ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Delete Custom Holiday By Custom Holiday ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/customholidays/{customHolidayId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holiday By Custom Holiday ID"
					]
				}
			}
		},
		{
			"displayName": "Custom Holiday ID",
			"name": "customHolidayId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holiday By Custom Holiday ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holiday By Custom Holiday ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holiday By Custom Holiday ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holiday By Custom Holiday ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holiday By Custom Holiday ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holiday By Custom Holiday ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holiday By Custom Holiday ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/customholidays/{customHolidayId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Holiday"
					],
					"operation": [
						"Put Custom Holiday By Custom Holiday ID"
					]
				}
			}
		},
		{
			"displayName": "Custom Holiday ID",
			"name": "customHolidayId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Holiday"
					],
					"operation": [
						"Put Custom Holiday By Custom Holiday ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Put Custom Holiday By Custom Holiday ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Put Custom Holiday By Custom Holiday ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Put Custom Holiday By Custom Holiday ID"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"type": "string",
			"default": "2021-01-01",
			"description": "The date for the custom holiday.",
			"routing": {
				"send": {
					"property": "date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Holiday"
					],
					"operation": [
						"Put Custom Holiday By Custom Holiday ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Company 100th year anniversary",
			"description": "The description for the custom holiday.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Holiday"
					],
					"operation": [
						"Put Custom Holiday By Custom Holiday ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Put Custom Holiday By Custom Holiday ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/customholidays",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holidays By Employer ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holidays By Employer ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holidays By Employer ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holidays By Employer ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holidays By Employer ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holidays By Employer ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holidays By Employer ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Get Custom Holidays By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/customholidays",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Holiday"
					],
					"operation": [
						"Post Custom Holiday By Employer ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Post Custom Holiday By Employer ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Post Custom Holiday By Employer ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Post Custom Holiday By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"type": "string",
			"default": "2021-01-01",
			"description": "The date for the custom holiday.",
			"routing": {
				"send": {
					"property": "date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Holiday"
					],
					"operation": [
						"Post Custom Holiday By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Company 100th year anniversary",
			"description": "The description for the custom holiday.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Holiday"
					],
					"operation": [
						"Post Custom Holiday By Employer ID"
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
						"Custom Holiday"
					],
					"operation": [
						"Post Custom Holiday By Employer ID"
					]
				}
			}
		},
];
