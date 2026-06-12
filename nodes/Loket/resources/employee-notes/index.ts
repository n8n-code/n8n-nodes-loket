import type { INodeProperties } from 'n8n-workflow';

export const employeeNotesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Notes"
					]
				}
			},
			"options": [
				{
					"name": "Delete Employee Note By Note ID",
					"value": "Delete Employee Note By Note ID",
					"action": "Delete an employee note record",
					"description": "__Activity name :__ DeleteEmployeeNoteByNoteId\n\nDelete an existing note record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/notes/{{$parameter[\"noteId\"]}}"
						}
					}
				},
				{
					"name": "Get Employee Note By Note ID",
					"value": "Get Employee Note By Note ID",
					"action": "Details of an employee note",
					"description": "__Activity name :__ GetEmployeeNoteByNoteId\n\nGet the details of a note\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/notes/{{$parameter[\"noteId\"]}}"
						}
					}
				},
				{
					"name": "Put Employee Note By Note ID",
					"value": "Put Employee Note By Note ID",
					"action": "Edit an employee note record",
					"description": "__Activity name :__ PutEmployeeNoteByNoteId\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding ` / metadata ` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/notes/{{$parameter[\"noteId\"]}}"
						}
					}
				},
				{
					"name": "Get Employee Notes By Employee ID",
					"value": "Get Employee Notes By Employee ID",
					"action": "Get a list of notes for an employee.",
					"description": "__Activity name :__ GetEmployeeNotesByEmployeeId\n\nGet a list of notes, available for the user, for the employee. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/notes"
						}
					}
				},
				{
					"name": "Post Employee Note By Employee ID",
					"value": "Post Employee Note By Employee ID",
					"action": "Add a note for an employee",
					"description": "__Activity name :__ PostEmployeeNoteByEmployeeId\n\n__Metadata:__ Possible options for fields of the type 'metadata' can be acquired(GET)by adding `/metadata` to the POST URL.\n\n__Defaults:__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/notes"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/notes/{noteId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Notes"
					],
					"operation": [
						"Delete Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Delete Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Delete Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Delete Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Delete Employee Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/notes/{noteId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Notes"
					],
					"operation": [
						"Get Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Get Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Get Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Get Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Get Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Get Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Get Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Get Employee Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/notes/{noteId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Notes"
					],
					"operation": [
						"Put Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Put Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Put Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Put Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Put Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Put Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Put Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Put Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Put Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Put Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Put Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Put Employee Note By Note ID"
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
						"Employee Notes"
					],
					"operation": [
						"Put Employee Note By Note ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/{employeeId}/notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Notes"
					],
					"operation": [
						"Get Employee Notes By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Notes"
					],
					"operation": [
						"Get Employee Notes By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Get Employee Notes By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Get Employee Notes By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Get Employee Notes By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Get Employee Notes By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Get Employee Notes By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Get Employee Notes By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/{employeeId}/notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Notes"
					],
					"operation": [
						"Post Employee Note By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Notes"
					],
					"operation": [
						"Post Employee Note By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Post Employee Note By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Post Employee Note By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Post Employee Note By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Post Employee Note By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Post Employee Note By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Post Employee Note By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Post Employee Note By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Post Employee Note By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Post Employee Note By Employee ID"
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
						"Employee Notes"
					],
					"operation": [
						"Post Employee Note By Employee ID"
					]
				}
			}
		},
];
