import type { INodeProperties } from 'n8n-workflow';

export const leaveTypesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Types"
					]
				}
			},
			"options": [
				{
					"name": "Get Leave Types By Employer ID",
					"value": "Get Leave Types By Employer ID",
					"action": "List of leave types",
					"description": "__Activity name :__ GetLeaveTypesByEmployerId\n\nGet a list of all leavetypes for the employer\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/leavetypes"
						}
					}
				},
				{
					"name": "Get Leave Type By Employer ID And Leave Type ID",
					"value": "Get Leave Type By Employer ID And Leave Type ID",
					"action": "Details of a leave type",
					"description": "__Activity name:__ GetLeaveTypeByEmployerIdAndLeaveTypeId\n\nGet the details of a leave type\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/leavetypes/{{$parameter[\"leaveTypeId\"]}}"
						}
					}
				},
				{
					"name": "Put Leave Type By Employer ID And Leave Type ID",
					"value": "Put Leave Type By Employer ID And Leave Type ID",
					"action": "Edit the details of a leave type",
					"description": "__Activity name:__ PutLeaveTypeByEmployerIdAndLeaveTypeId\n\nEdit the details for a leave type\n\n__Metadata :__ There is no metadata endpoint for this resource.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/leavetypes/{{$parameter[\"leaveTypeId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/{employerId}/leavetypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Types"
					],
					"operation": [
						"Get Leave Types By Employer ID"
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
						"Leave Types"
					],
					"operation": [
						"Get Leave Types By Employer ID"
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
						"Leave Types"
					],
					"operation": [
						"Get Leave Types By Employer ID"
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
						"Leave Types"
					],
					"operation": [
						"Get Leave Types By Employer ID"
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
						"Leave Types"
					],
					"operation": [
						"Get Leave Types By Employer ID"
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
						"Leave Types"
					],
					"operation": [
						"Get Leave Types By Employer ID"
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
						"Leave Types"
					],
					"operation": [
						"Get Leave Types By Employer ID"
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
						"Leave Types"
					],
					"operation": [
						"Get Leave Types By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/leavetypes/{leaveTypeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Types"
					],
					"operation": [
						"Get Leave Type By Employer ID And Leave Type ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Type ID",
			"name": "leaveTypeId",
			"required": true,
			"description": "The unique identifier of the leave type",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Types"
					],
					"operation": [
						"Get Leave Type By Employer ID And Leave Type ID"
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
						"Leave Types"
					],
					"operation": [
						"Get Leave Type By Employer ID And Leave Type ID"
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
						"Leave Types"
					],
					"operation": [
						"Get Leave Type By Employer ID And Leave Type ID"
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
						"Leave Types"
					],
					"operation": [
						"Get Leave Type By Employer ID And Leave Type ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/{employerId}/leavetypes/{leaveTypeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Types"
					],
					"operation": [
						"Put Leave Type By Employer ID And Leave Type ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Type ID",
			"name": "leaveTypeId",
			"required": true,
			"description": "The unique identifier of the leave type",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Types"
					],
					"operation": [
						"Put Leave Type By Employer ID And Leave Type ID"
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
						"Leave Types"
					],
					"operation": [
						"Put Leave Type By Employer ID And Leave Type ID"
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
						"Leave Types"
					],
					"operation": [
						"Put Leave Type By Employer ID And Leave Type ID"
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
						"Leave Types"
					],
					"operation": [
						"Put Leave Type By Employer ID And Leave Type ID"
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
						"Leave Types"
					],
					"operation": [
						"Put Leave Type By Employer ID And Leave Type ID"
					]
				}
			}
		},
		{
			"displayName": "Deviations",
			"name": "deviations",
			"type": "json",
			"default": "{\n  \"balanceExceedsYear\": true,\n  \"employeeCanRequestIncrease\": false,\n  \"enabled\": true,\n  \"value\": \"Verlof\"\n}",
			"description": "Optional deviations to the leave type.\n\nIf set these deviations will overwrite the default values.\n\nNote: Two leaveTypes are excluded from deviations \"verlof\" and \"Verlof bovenwettelijk\"",
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
						"Leave Types"
					],
					"operation": [
						"Put Leave Type By Employer ID And Leave Type ID"
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
						"Leave Types"
					],
					"operation": [
						"Put Leave Type By Employer ID And Leave Type ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Type",
			"name": "leaveType",
			"type": "json",
			"default": "{\n  \"balanceExceedsYear\": true,\n  \"employeeCanRequestIncrease\": true,\n  \"enabled\": true,\n  \"key\": 1,\n  \"value\": \"Verlof (bovenwettelijk)\"\n}",
			"description": "The default configuration of the leave type\n\nIf the deviations object is set those values overwrite all the default values.",
			"routing": {
				"send": {
					"property": "leaveType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Types"
					],
					"operation": [
						"Put Leave Type By Employer ID And Leave Type ID"
					]
				}
			}
		},
];
