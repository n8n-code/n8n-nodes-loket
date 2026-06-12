import type { INodeProperties } from 'n8n-workflow';

export const partnerDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					]
				}
			},
			"options": [
				{
					"name": "Delete Partner By Partner ID",
					"value": "Delete Partner By Partner ID",
					"action": "Delete a specific partner record",
					"description": "__Activity name :__ DeletePartnerByPartnerId\n\nDelete an existing partner\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/partners/{{$parameter[\"partnerId\"]}}"
						}
					}
				},
				{
					"name": "Get Partner By Partner ID",
					"value": "Get Partner By Partner ID",
					"action": "Details of a single partner",
					"description": "__Activity name :__ GetPartnerByPartnerId\n\nGet the details of a single partner\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/partners/{{$parameter[\"partnerId\"]}}"
						}
					}
				},
				{
					"name": "Put Partner By Partner ID",
					"value": "Put Partner By Partner ID",
					"action": "Edit the details for a partner",
					"description": "__Activity name :__ PutPartnerByPartnerId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n\nEdit the partner information\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/partners/{{$parameter[\"partnerId\"]}}"
						}
					}
				},
				{
					"name": "Get Partners By Employee ID",
					"value": "Get Partners By Employee ID",
					"action": "List of partners for an employee",
					"description": "__Activity name :__ GetPartnersByEmployeeId\n\nGet the list of partners of the employee\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/partners"
						}
					}
				},
				{
					"name": "Post Partner By Employee ID",
					"value": "Post Partner By Employee ID",
					"action": "Create the partner for an employee",
					"description": "__Activity name :__ PostPartnerByEmployeeId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__  Default values for a new object can be acquired by adding `/defaults' to the POST URL. \n\nCreate the partner for an employee\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/partners"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/partners/{partnerId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Delete Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "Partner ID",
			"name": "partnerId",
			"required": true,
			"description": "The unique identifier of a partner",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Delete Partner By Partner ID"
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
						"Partner"
					],
					"operation": [
						"Delete Partner By Partner ID"
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
						"Partner"
					],
					"operation": [
						"Delete Partner By Partner ID"
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
						"Partner"
					],
					"operation": [
						"Delete Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/partners/{partnerId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Get Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "Partner ID",
			"name": "partnerId",
			"required": true,
			"description": "The unique identifier of a partner",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Get Partner By Partner ID"
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
						"Partner"
					],
					"operation": [
						"Get Partner By Partner ID"
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
						"Partner"
					],
					"operation": [
						"Get Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/partners/{partnerId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "Partner ID",
			"name": "partnerId",
			"required": true,
			"description": "The unique identifier of a partner",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
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
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
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
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
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
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of Birth",
			"name": "dateOfBirth",
			"type": "string",
			"default": "1995-05-21",
			"description": "The date of birth\n",
			"routing": {
				"send": {
					"property": "dateOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of Death",
			"name": "dateOfDeath",
			"type": "string",
			"default": "",
			"description": "The date of death\n",
			"routing": {
				"send": {
					"property": "dateOfDeath",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "1995-05-21",
			"description": "end date",
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
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"type": "string",
			"default": "Susan",
			"description": "The first name, given name, forename or Christian name as part of a persons personal name.\n",
			"routing": {
				"send": {
					"property": "firstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "gender",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"female\"\n}",
			"description": "The gender\n",
			"routing": {
				"send": {
					"property": "gender",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "How To Format Last Name",
			"name": "howToFormatLastName",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"last name + last name partner\"\n}",
			"description": "Indicates how the system will format the last name.\n",
			"routing": {
				"send": {
					"property": "howToFormatLastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
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
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "Initials",
			"name": "initials",
			"type": "string",
			"default": "S.L.",
			"description": "The initials\n",
			"routing": {
				"send": {
					"property": "initials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"type": "string",
			"default": "Bergen",
			"description": "The last name, family name or surname as part of a persons personal name.\n",
			"routing": {
				"send": {
					"property": "lastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "Place Of Birth",
			"name": "placeOfBirth",
			"type": "string",
			"default": "Amsterdam",
			"description": "The place of birth\n",
			"routing": {
				"send": {
					"property": "placeOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "Prefix",
			"name": "prefix",
			"type": "string",
			"default": "van",
			"description": "The prefix to the last name\n",
			"routing": {
				"send": {
					"property": "prefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "1995-05-21",
			"description": "startdate",
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
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"e.g. Msc, PHD or Baron\"\n}",
			"description": "The title to be used (if any).\n",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "Wao Classification",
			"name": "waoClassification",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"15 - 24\"\n}",
			"description": "The occupational disability classification in the form of a percentage range.",
			"routing": {
				"send": {
					"property": "waoClassification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Put Partner By Partner ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/{employeeId}/partners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Get Partners By Employee ID"
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
						"Partner"
					],
					"operation": [
						"Get Partners By Employee ID"
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
						"Partner"
					],
					"operation": [
						"Get Partners By Employee ID"
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
						"Partner"
					],
					"operation": [
						"Get Partners By Employee ID"
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
						"Partner"
					],
					"operation": [
						"Get Partners By Employee ID"
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
						"Partner"
					],
					"operation": [
						"Get Partners By Employee ID"
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
						"Partner"
					],
					"operation": [
						"Get Partners By Employee ID"
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
						"Partner"
					],
					"operation": [
						"Get Partners By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/{employeeId}/partners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
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
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
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
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
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
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of Birth",
			"name": "dateOfBirth",
			"type": "string",
			"default": "1995-05-21",
			"description": "The date of birth\n",
			"routing": {
				"send": {
					"property": "dateOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of Death",
			"name": "dateOfDeath",
			"type": "string",
			"default": "",
			"description": "The date of death\n",
			"routing": {
				"send": {
					"property": "dateOfDeath",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "1995-05-21",
			"description": "end date",
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
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"type": "string",
			"default": "Susan",
			"description": "The first name, given name, forename or Christian name as part of a persons personal name.\n",
			"routing": {
				"send": {
					"property": "firstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "gender",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"female\"\n}",
			"description": "The gender\n",
			"routing": {
				"send": {
					"property": "gender",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "How To Format Last Name",
			"name": "howToFormatLastName",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"last name + last name partner\"\n}",
			"description": "Indicates how the system will format the last name.\n",
			"routing": {
				"send": {
					"property": "howToFormatLastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
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
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Initials",
			"name": "initials",
			"type": "string",
			"default": "S.L.",
			"description": "The initials\n",
			"routing": {
				"send": {
					"property": "initials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"type": "string",
			"default": "Bergen",
			"description": "The last name, family name or surname as part of a persons personal name.\n",
			"routing": {
				"send": {
					"property": "lastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Place Of Birth",
			"name": "placeOfBirth",
			"type": "string",
			"default": "Amsterdam",
			"description": "The place of birth\n",
			"routing": {
				"send": {
					"property": "placeOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Prefix",
			"name": "prefix",
			"type": "string",
			"default": "van",
			"description": "The prefix to the last name\n",
			"routing": {
				"send": {
					"property": "prefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "1995-05-21",
			"description": "startdate",
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
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"e.g. Msc, PHD or Baron\"\n}",
			"description": "The title to be used (if any).\n",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Wao Classification",
			"name": "waoClassification",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"15 - 24\"\n}",
			"description": "The occupational disability classification in the form of a percentage range.",
			"routing": {
				"send": {
					"property": "waoClassification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partner"
					],
					"operation": [
						"Post Partner By Employee ID"
					]
				}
			}
		},
];
