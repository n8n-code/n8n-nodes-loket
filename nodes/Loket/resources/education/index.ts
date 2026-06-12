import type { INodeProperties } from 'n8n-workflow';

export const educationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					]
				}
			},
			"options": [
				{
					"name": "Delete Education By Education ID",
					"value": "Delete Education By Education ID",
					"action": "Delete a specific education",
					"description": "__Activity name :__ DeleteEducationByEducationId\n\nDelete an existing Education (for an employee)\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/educations/{{$parameter[\"employeeEducationId\"]}}"
						}
					}
				},
				{
					"name": "Get Education By Education ID",
					"value": "Get Education By Education ID",
					"action": "Details of a single education",
					"description": "__Activity name :__ GetEducationByEducationId  \n\nGet the details of a single education\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/educations/{{$parameter[\"employeeEducationId\"]}}"
						}
					}
				},
				{
					"name": "Put Education By Education ID",
					"value": "Put Education By Education ID",
					"action": "Edit a Education",
					"description": "__Activity name :__ PutEducationByEducationId  \n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n\nEdit the details of a education\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/educations/{{$parameter[\"employeeEducationId\"]}}"
						}
					}
				},
				{
					"name": "Get Educations By Employee ID",
					"value": "Get Educations By Employee ID",
					"action": "List of educations for an employee",
					"description": "__Activity name :__ GetEducationsByEmployeeId\n\nGet list of educations for an employee\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/educations"
						}
					}
				},
				{
					"name": "Post Education By Employee ID",
					"value": "Post Education By Employee ID",
					"action": "Create a education for an employee",
					"description": "__Activity name :__ PostEducationByEmployeeId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ No default values\n\nCreate a new education for an employee\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/educations"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/educations/{employeeEducationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Delete Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "Employee Education ID",
			"name": "employeeEducationId",
			"required": true,
			"description": "The unique identifier of the employee education detail",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Delete Education By Education ID"
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
						"Education"
					],
					"operation": [
						"Delete Education By Education ID"
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
						"Education"
					],
					"operation": [
						"Delete Education By Education ID"
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
						"Education"
					],
					"operation": [
						"Delete Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/educations/{employeeEducationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Get Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "Employee Education ID",
			"name": "employeeEducationId",
			"required": true,
			"description": "The unique identifier of the employee education detail",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Get Education By Education ID"
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
						"Education"
					],
					"operation": [
						"Get Education By Education ID"
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
						"Education"
					],
					"operation": [
						"Get Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/educations/{employeeEducationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "Employee Education ID",
			"name": "employeeEducationId",
			"required": true,
			"description": "The unique identifier of the employee education detail",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
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
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
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
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
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
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "Education Level",
			"name": "educationLevel",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"HBO\"\n}",
			"description": "Indicates the level of the education.",
			"routing": {
				"send": {
					"property": "educationLevel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "Employee Costs",
			"name": "employeeCosts",
			"type": "number",
			"default": 150,
			"description": "The costs of the education for the employee\n",
			"routing": {
				"send": {
					"property": "employeeCosts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "Employer Costs",
			"name": "employerCosts",
			"type": "number",
			"default": 850,
			"description": "The costs of the education for the employer\n",
			"routing": {
				"send": {
					"property": "employerCosts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The end date of the entity. The date is up to and including.",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "End Of Validity Date",
			"name": "endOfValidityDate",
			"type": "string",
			"default": "2023-12-31",
			"description": "The end date of the diploma validity . The date is up to and including.",
			"routing": {
				"send": {
					"property": "endOfValidityDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "Further Indication",
			"name": "furtherIndication",
			"type": "json",
			"default": "{\n  \"code\": \"WO\",\n  \"description\": \"Wetenschappelijk\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"routing": {
				"send": {
					"property": "furtherIndication",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "Has Diploma",
			"name": "hasDiploma",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Onbekend\"\n}",
			"description": "Indicates whether the employee has graduated.",
			"routing": {
				"send": {
					"property": "hasDiploma",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
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
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "Institute",
			"name": "institute",
			"type": "json",
			"default": "{\n  \"Name\": \"Avans Hogeschool\",\n  \"city\": \"Leiden\"\n}",
			"routing": {
				"send": {
					"property": "institute",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "HBO accountancy",
			"description": "Name of the education",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "Particularities",
			"name": "particularities",
			"type": "string",
			"default": "Van de opleiding is alleen een certificaat verkregen",
			"description": "Extra information about the education",
			"routing": {
				"send": {
					"property": "particularities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this education starts.",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "Type Of Education",
			"name": "typeOfEducation",
			"type": "json",
			"default": "{\n  \"code\": \"WO\",\n  \"description\": \"Wetenschappelijk\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "The type of the education. `type of education` is a metadata field within the employer context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "typeOfEducation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "Year Of Diploma",
			"name": "yearOfDiploma",
			"type": "number",
			"default": 1995,
			"description": "Year in which the diploma was aquired",
			"routing": {
				"send": {
					"property": "yearOfDiploma",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Put Education By Education ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/{employeeId}/educations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Get Educations By Employee ID"
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
						"Education"
					],
					"operation": [
						"Get Educations By Employee ID"
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
						"Education"
					],
					"operation": [
						"Get Educations By Employee ID"
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
						"Education"
					],
					"operation": [
						"Get Educations By Employee ID"
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
						"Education"
					],
					"operation": [
						"Get Educations By Employee ID"
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
						"Education"
					],
					"operation": [
						"Get Educations By Employee ID"
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
						"Education"
					],
					"operation": [
						"Get Educations By Employee ID"
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
						"Education"
					],
					"operation": [
						"Get Educations By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/{employeeId}/educations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
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
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
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
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
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
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Education Level",
			"name": "educationLevel",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"HBO\"\n}",
			"description": "Indicates the level of the education.",
			"routing": {
				"send": {
					"property": "educationLevel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee Costs",
			"name": "employeeCosts",
			"type": "number",
			"default": 150,
			"description": "The costs of the education for the employee\n",
			"routing": {
				"send": {
					"property": "employeeCosts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employer Costs",
			"name": "employerCosts",
			"type": "number",
			"default": 850,
			"description": "The costs of the education for the employer\n",
			"routing": {
				"send": {
					"property": "employerCosts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The end date of the entity. The date is up to and including.",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "End Of Validity Date",
			"name": "endOfValidityDate",
			"type": "string",
			"default": "2023-12-31",
			"description": "The end date of the diploma validity . The date is up to and including.",
			"routing": {
				"send": {
					"property": "endOfValidityDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Further Indication",
			"name": "furtherIndication",
			"type": "json",
			"default": "{\n  \"code\": \"WO\",\n  \"description\": \"Wetenschappelijk\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"routing": {
				"send": {
					"property": "furtherIndication",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Has Diploma",
			"name": "hasDiploma",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Onbekend\"\n}",
			"description": "Indicates whether the employee has graduated.",
			"routing": {
				"send": {
					"property": "hasDiploma",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
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
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Institute",
			"name": "institute",
			"type": "json",
			"default": "{\n  \"Name\": \"Avans Hogeschool\",\n  \"city\": \"Leiden\"\n}",
			"routing": {
				"send": {
					"property": "institute",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "HBO accountancy",
			"description": "Name of the education",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Particularities",
			"name": "particularities",
			"type": "string",
			"default": "Van de opleiding is alleen een certificaat verkregen",
			"description": "Extra information about the education",
			"routing": {
				"send": {
					"property": "particularities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this education starts.",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Type Of Education",
			"name": "typeOfEducation",
			"type": "json",
			"default": "{\n  \"code\": \"WO\",\n  \"description\": \"Wetenschappelijk\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "The type of the education. `type of education` is a metadata field within the employer context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "typeOfEducation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Year Of Diploma",
			"name": "yearOfDiploma",
			"type": "number",
			"default": 1995,
			"description": "Year in which the diploma was aquired",
			"routing": {
				"send": {
					"property": "yearOfDiploma",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education"
					],
					"operation": [
						"Post Education By Employee ID"
					]
				}
			}
		},
];
