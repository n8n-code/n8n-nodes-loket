import type { INodeProperties } from 'n8n-workflow';

export const nationalHolidayDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"National Holiday"
					]
				}
			},
			"options": [
				{
					"name": "Get National Holidays By Employer ID",
					"value": "Get National Holidays By Employer ID",
					"action": "List of national holidays",
					"description": "__Activity name :__ GetNationalHolidaysByEmployerId\n\nGet a list of all national holidays for the employer\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/nationalholidays"
						}
					}
				},
				{
					"name": "Get National Holidays By Employer ID And National Holiday ID",
					"value": "Get National Holidays By Employer ID And National Holiday ID",
					"action": "Details of a national holiday",
					"description": "__Activity name:__ GetNationalHolidaysByEmployerIdAndNationalHolidayId\n\nGet the details of a national holiday\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/nationalholidays/{{$parameter[\"nationalHolidayId\"]}}"
						}
					}
				},
				{
					"name": "Put National Holiday By Employer ID And National Holiday ID",
					"value": "Put National Holiday By Employer ID And National Holiday ID",
					"action": "Edit the details of a national holidays",
					"description": "__Activity name:__ PutNationalHolidayByEmployerIdAndNationalHolidayId\n\nEdit the details for a national holiday\n\n__Metadata :__ There is no metadata endpoint for this resource.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/nationalholidays/{{$parameter[\"nationalHolidayId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/{employerId}/nationalholidays",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"National Holiday"
					],
					"operation": [
						"Get National Holidays By Employer ID"
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
						"National Holiday"
					],
					"operation": [
						"Get National Holidays By Employer ID"
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
						"National Holiday"
					],
					"operation": [
						"Get National Holidays By Employer ID"
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
						"National Holiday"
					],
					"operation": [
						"Get National Holidays By Employer ID"
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
						"National Holiday"
					],
					"operation": [
						"Get National Holidays By Employer ID"
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
						"National Holiday"
					],
					"operation": [
						"Get National Holidays By Employer ID"
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
						"National Holiday"
					],
					"operation": [
						"Get National Holidays By Employer ID"
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
						"National Holiday"
					],
					"operation": [
						"Get National Holidays By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/nationalholidays/{nationalHolidayId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"National Holiday"
					],
					"operation": [
						"Get National Holidays By Employer ID And National Holiday ID"
					]
				}
			}
		},
		{
			"displayName": "National Holiday ID",
			"name": "nationalHolidayId",
			"required": true,
			"description": "The unique identifier of the national holiday",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"National Holiday"
					],
					"operation": [
						"Get National Holidays By Employer ID And National Holiday ID"
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
						"National Holiday"
					],
					"operation": [
						"Get National Holidays By Employer ID And National Holiday ID"
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
						"National Holiday"
					],
					"operation": [
						"Get National Holidays By Employer ID And National Holiday ID"
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
						"National Holiday"
					],
					"operation": [
						"Get National Holidays By Employer ID And National Holiday ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/{employerId}/nationalholidays/{nationalHolidayId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"National Holiday"
					],
					"operation": [
						"Put National Holiday By Employer ID And National Holiday ID"
					]
				}
			}
		},
		{
			"displayName": "National Holiday ID",
			"name": "nationalHolidayId",
			"required": true,
			"description": "The unique identifier of the national holiday",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"National Holiday"
					],
					"operation": [
						"Put National Holiday By Employer ID And National Holiday ID"
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
						"National Holiday"
					],
					"operation": [
						"Put National Holiday By Employer ID And National Holiday ID"
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
						"National Holiday"
					],
					"operation": [
						"Put National Holiday By Employer ID And National Holiday ID"
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
						"National Holiday"
					],
					"operation": [
						"Put National Holiday By Employer ID And National Holiday ID"
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
						"National Holiday"
					],
					"operation": [
						"Put National Holiday By Employer ID And National Holiday ID"
					]
				}
			}
		},
		{
			"displayName": "Deviations",
			"name": "deviations",
			"type": "json",
			"default": "{\n  \"enabled\": true,\n  \"value\": \"Boxing day\"\n}",
			"description": "Optional deviations to the national holiday.\nIf set these deviations will overwrite the default values.",
			"routing": {
				"send": {
					"property": "deviations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"National Holiday"
					],
					"operation": [
						"Put National Holiday By Employer ID And National Holiday ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)\n",
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
						"National Holiday"
					],
					"operation": [
						"Put National Holiday By Employer ID And National Holiday ID"
					]
				}
			}
		},
		{
			"displayName": "National Holiday",
			"name": "nationalHoliday",
			"type": "json",
			"default": "{\n  \"dateInCurrentYear\": \"2021-12-26\",\n  \"enabled\": true,\n  \"key\": 1,\n  \"value\": \"2e kerstdag\"\n}",
			"description": "The default configuration of the national holiday.\n\nIf the deviations object is set those values overwrite all the default values.",
			"routing": {
				"send": {
					"property": "nationalHoliday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"National Holiday"
					],
					"operation": [
						"Put National Holiday By Employer ID And National Holiday ID"
					]
				}
			}
		},
];
