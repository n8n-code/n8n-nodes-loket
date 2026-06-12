import type { INodeProperties } from 'n8n-workflow';

export const payrollRunNotesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					]
				}
			},
			"options": [
				{
					"name": "Delete Payroll Run Note By Note ID",
					"value": "Delete Payroll Run Note By Note ID",
					"action": "Delete a payroll run note record",
					"description": "__Activity name :__ DeletePayrollRunNoteByNoteId\n\nDelete an existing note record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/payrolladministrations/payrollruns/notes/{{$parameter[\"noteId\"]}}"
						}
					}
				},
				{
					"name": "Get Payroll Run Note By Note ID",
					"value": "Get Payroll Run Note By Note ID",
					"action": "Details of a payroll run note",
					"description": "__Activity name :__ GetPayrollRunNoteByNoteId\n\nGet the details of a note\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/notes/{{$parameter[\"noteId\"]}}"
						}
					}
				},
				{
					"name": "Put Payroll Run Note By Note ID",
					"value": "Put Payroll Run Note By Note ID",
					"action": "Edit a payroll run note record",
					"description": "__Activity name :__ PutPayrollRunNoteByNoteId\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding ` / metadata ` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/payrolladministrations/payrollruns/notes/{{$parameter[\"noteId\"]}}"
						}
					}
				},
				{
					"name": "Get Payroll Run Notes By Payroll Run ID",
					"value": "Get Payroll Run Notes By Payroll Run ID",
					"action": "Get a list of notes for a payroll run.",
					"description": "__Activity name :__ GetPayrollRunNotesByPayrollRunId\n\nGet a list of notes, available for the user, for the payroll run. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/notes"
						}
					}
				},
				{
					"name": "Post Payroll Run Note By Payroll Run ID",
					"value": "Post Payroll Run Note By Payroll Run ID",
					"action": "Add a note for a payroll run",
					"description": "__Activity name :__ PostPayrollRunNoteByPayrollRunId\n\n__Metadata:__ Possible options for fields of the type 'metadata' can be acquired(GET)by adding `/metadata` to the POST URL.\n\n__Defaults:__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/notes"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/payrolladministrations/payrollruns/notes/{noteId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Delete Payroll Run Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "Note ID",
			"name": "noteId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Delete Payroll Run Note By Note ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Delete Payroll Run Note By Note ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Delete Payroll Run Note By Note ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Delete Payroll Run Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/notes/{noteId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "Note ID",
			"name": "noteId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Note By Note ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Note By Note ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Note By Note ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Note By Note ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Note By Note ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Note By Note ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/payrolladministrations/payrollruns/notes/{noteId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Put Payroll Run Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "Note ID",
			"name": "noteId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Put Payroll Run Note By Note ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Put Payroll Run Note By Note ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Put Payroll Run Note By Note ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Put Payroll Run Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "Accessible By",
			"name": "accessibleBy",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Everyone\"\n}",
			"description": "Indicates who can view this node.\n",
			"routing": {
				"send": {
					"property": "accessibleBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Put Payroll Run Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "createdBy",
			"type": "json",
			"default": "{\n  \"formattedName\": \"Jong, I\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"initials\": \"I\",\n  \"lastName\": \"Jong\",\n  \"prefix\": \"de\"\n}",
			"routing": {
				"send": {
					"property": "createdBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Put Payroll Run Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "Created On",
			"name": "createdOn",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which the note was created\n",
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
						"Payroll Run Notes"
					],
					"operation": [
						"Put Payroll Run Note By Note ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Put Payroll Run Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "Last Modified By",
			"name": "lastModifiedBy",
			"type": "json",
			"default": "{\n  \"formattedName\": \"Jong, I\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"initials\": \"I\",\n  \"lastName\": \"Jong\",\n  \"prefix\": \"de\"\n}",
			"routing": {
				"send": {
					"property": "lastModifiedBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Put Payroll Run Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "Last Modified On",
			"name": "lastModifiedOn",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which the note was last modified (this field has the same value as `createdOn` if no change was made afther creation).",
			"routing": {
				"send": {
					"property": "lastModifiedOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Put Payroll Run Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "Remember to do xyz",
			"description": "The note it self.\n\n__Note:__ This is a free text field so users can add htlm/script etc.",
			"routing": {
				"send": {
					"property": "note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Put Payroll Run Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"type": "string",
			"default": "Remember to do xyz",
			"description": "subject of the note",
			"routing": {
				"send": {
					"property": "subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Put Payroll Run Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Notes By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "Payrollrun ID",
			"name": "payrollrunId",
			"required": true,
			"description": "The unique identifier of the payroll run",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Notes By Payroll Run ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Notes By Payroll Run ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Notes By Payroll Run ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Notes By Payroll Run ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Notes By Payroll Run ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Notes By Payroll Run ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Get Payroll Run Notes By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Post Payroll Run Note By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "Payrollrun ID",
			"name": "payrollrunId",
			"required": true,
			"description": "The unique identifier of the payroll run",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Post Payroll Run Note By Payroll Run ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Post Payroll Run Note By Payroll Run ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Post Payroll Run Note By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "Accessible By",
			"name": "accessibleBy",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Everyone\"\n}",
			"description": "Indicates who can view this node.\n",
			"routing": {
				"send": {
					"property": "accessibleBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Post Payroll Run Note By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "createdBy",
			"type": "json",
			"default": "{\n  \"formattedName\": \"Jong, I\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"initials\": \"I\",\n  \"lastName\": \"Jong\",\n  \"prefix\": \"de\"\n}",
			"routing": {
				"send": {
					"property": "createdBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Post Payroll Run Note By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "Created On",
			"name": "createdOn",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which the note was created\n",
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
						"Payroll Run Notes"
					],
					"operation": [
						"Post Payroll Run Note By Payroll Run ID"
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
						"Payroll Run Notes"
					],
					"operation": [
						"Post Payroll Run Note By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "Last Modified By",
			"name": "lastModifiedBy",
			"type": "json",
			"default": "{\n  \"formattedName\": \"Jong, I\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"initials\": \"I\",\n  \"lastName\": \"Jong\",\n  \"prefix\": \"de\"\n}",
			"routing": {
				"send": {
					"property": "lastModifiedBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Post Payroll Run Note By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "Last Modified On",
			"name": "lastModifiedOn",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which the note was last modified (this field has the same value as `createdOn` if no change was made afther creation).",
			"routing": {
				"send": {
					"property": "lastModifiedOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Post Payroll Run Note By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "Remember to do xyz",
			"description": "The note it self.\n\n__Note:__ This is a free text field so users can add htlm/script etc.",
			"routing": {
				"send": {
					"property": "note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Post Payroll Run Note By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"type": "string",
			"default": "Remember to do xyz",
			"description": "subject of the note",
			"routing": {
				"send": {
					"property": "subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Notes"
					],
					"operation": [
						"Post Payroll Run Note By Payroll Run ID"
					]
				}
			}
		},
];
