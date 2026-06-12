import type { INodeProperties } from 'n8n-workflow';

export const contactHistoryDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					]
				}
			},
			"options": [
				{
					"name": "Delete Absence Contact History By Absence Contact History ID",
					"value": "Delete Absence Contact History By Absence Contact History ID",
					"action": "Delete a specific record",
					"description": "__Activity name :__ DeleteAbsenceContactHistoryByAbsenceContactHistoryId\n\nDelete an existing record from the contact history\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/absences/absencecontactHistory/{{$parameter[\"absencecontactHistoryId\"]}}"
						}
					}
				},
				{
					"name": "Get Absence Contact History By Absence Contact History ID",
					"value": "Get Absence Contact History By Absence Contact History ID",
					"action": "Details of a contact history",
					"description": "__Activity name :__ GetAbsenceContactHistoryByAbsenceContactHistoryId\n\nGet the details of a contact \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/absences/absencecontactHistory/{{$parameter[\"absencecontactHistoryId\"]}}"
						}
					}
				},
				{
					"name": "Put Absence Contact History By Absence Contact History ID",
					"value": "Put Absence Contact History By Absence Contact History ID",
					"action": "Edit the details of a contact history",
					"description": "__Activity name :__ PutAbsenceContactHistoryByAbsenceContactHistoryId\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n\nEdit the details of a contact history\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/absences/absencecontactHistory/{{$parameter[\"absencecontactHistoryId\"]}}"
						}
					}
				},
				{
					"name": "Get Absence Contacts History By Absence ID",
					"value": "Get Absence Contacts History By Absence ID",
					"action": "Contact history for an absence",
					"description": "__Activity name :__ GetAbsenceContactHistoryByAbsenceId\n\nGet the contacts history for a specific absence (verzuimmelding).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/absences/{{$parameter[\"absenceId\"]}}/absencecontactHistory"
						}
					}
				},
				{
					"name": "Post Absence Contact History By Absence ID",
					"value": "Post Absence Contact History By Absence ID",
					"action": "Create a contact history for an Absence",
					"description": "__Activity name :__ PostAbsenceContactHistoryByAbsenceId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/absences/{{$parameter[\"absenceId\"]}}/absencecontactHistory"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/absences/absencecontactHistory/{absencecontactHistoryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Delete Absence Contact History By Absence Contact History ID"
					]
				}
			}
		},
		{
			"displayName": "Absencecontact History ID",
			"name": "absencecontactHistoryId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Delete Absence Contact History By Absence Contact History ID"
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
						"Contact History"
					],
					"operation": [
						"Delete Absence Contact History By Absence Contact History ID"
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
						"Contact History"
					],
					"operation": [
						"Delete Absence Contact History By Absence Contact History ID"
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
						"Contact History"
					],
					"operation": [
						"Delete Absence Contact History By Absence Contact History ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/absences/absencecontactHistory/{absencecontactHistoryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Get Absence Contact History By Absence Contact History ID"
					]
				}
			}
		},
		{
			"displayName": "Absencecontact History ID",
			"name": "absencecontactHistoryId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Get Absence Contact History By Absence Contact History ID"
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
						"Contact History"
					],
					"operation": [
						"Get Absence Contact History By Absence Contact History ID"
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
						"Contact History"
					],
					"operation": [
						"Get Absence Contact History By Absence Contact History ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/absences/absencecontactHistory/{absencecontactHistoryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Put Absence Contact History By Absence Contact History ID"
					]
				}
			}
		},
		{
			"displayName": "Absencecontact History ID",
			"name": "absencecontactHistoryId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Put Absence Contact History By Absence Contact History ID"
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
						"Contact History"
					],
					"operation": [
						"Put Absence Contact History By Absence Contact History ID"
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
						"Contact History"
					],
					"operation": [
						"Put Absence Contact History By Absence Contact History ID"
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
						"Contact History"
					],
					"operation": [
						"Put Absence Contact History By Absence Contact History ID"
					]
				}
			}
		},
		{
			"displayName": "Contact Date",
			"name": "contactDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which the contact was initiated.",
			"routing": {
				"send": {
					"property": "contactDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Put Absence Contact History By Absence Contact History ID"
					]
				}
			}
		},
		{
			"displayName": "Contact Method",
			"name": "contactMethod",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"e-mail\"\n}",
			"description": "The method of contacting the person\n",
			"routing": {
				"send": {
					"property": "contactMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Put Absence Contact History By Absence Contact History ID"
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
						"Contact History"
					],
					"operation": [
						"Put Absence Contact History By Absence Contact History ID"
					]
				}
			}
		},
		{
			"displayName": "Summary",
			"name": "summary",
			"type": "string",
			"default": "",
			"description": "Summary of the contact.\n",
			"routing": {
				"send": {
					"property": "summary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Put Absence Contact History By Absence Contact History ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/absences/{absenceId}/absencecontactHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Get Absence Contacts History By Absence ID"
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
						"Contact History"
					],
					"operation": [
						"Get Absence Contacts History By Absence ID"
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
						"Contact History"
					],
					"operation": [
						"Get Absence Contacts History By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Absence ID",
			"name": "absenceId",
			"required": true,
			"description": "The unique identifier of an absence",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Get Absence Contacts History By Absence ID"
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
						"Contact History"
					],
					"operation": [
						"Get Absence Contacts History By Absence ID"
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
						"Contact History"
					],
					"operation": [
						"Get Absence Contacts History By Absence ID"
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
						"Contact History"
					],
					"operation": [
						"Get Absence Contacts History By Absence ID"
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
						"Contact History"
					],
					"operation": [
						"Get Absence Contacts History By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/absences/{absenceId}/absencecontactHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Post Absence Contact History By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Absence ID",
			"name": "absenceId",
			"required": true,
			"description": "The unique identifier of an absence",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Post Absence Contact History By Absence ID"
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
						"Contact History"
					],
					"operation": [
						"Post Absence Contact History By Absence ID"
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
						"Contact History"
					],
					"operation": [
						"Post Absence Contact History By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Contact Date",
			"name": "contactDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which the contact was initiated.",
			"routing": {
				"send": {
					"property": "contactDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Post Absence Contact History By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Contact Method",
			"name": "contactMethod",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"e-mail\"\n}",
			"description": "The method of contacting the person\n",
			"routing": {
				"send": {
					"property": "contactMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Post Absence Contact History By Absence ID"
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
						"Contact History"
					],
					"operation": [
						"Post Absence Contact History By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Summary",
			"name": "summary",
			"type": "string",
			"default": "",
			"description": "Summary of the contact.\n",
			"routing": {
				"send": {
					"property": "summary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact History"
					],
					"operation": [
						"Post Absence Contact History By Absence ID"
					]
				}
			}
		},
];
