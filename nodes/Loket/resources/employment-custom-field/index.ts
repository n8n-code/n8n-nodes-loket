import type { INodeProperties } from 'n8n-workflow';

export const employmentCustomFieldDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Custom Field"
					]
				}
			},
			"options": [
				{
					"name": "Delete Employment Custom Field By Employment Custom Field ID",
					"value": "Delete Employment Custom Field By Employment Custom Field ID",
					"action": "Delete an employment custom field record",
					"description": "__Activity name :__ DeleteEmploymentCustomFieldByEmploymentCustomFieldId\n\nDelete an existing custom field record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/customfields/{{$parameter[\"employmentCustomFieldId\"]}}"
						}
					}
				},
				{
					"name": "Get Employment Custom Field By Employment Custom Field ID",
					"value": "Get Employment Custom Field By Employment Custom Field ID",
					"action": "Details of an employment custom field",
					"description": "__Activity name :__ GetEmploymentCustomFieldByEmploymentCustomFieldId\n\nGet the details of a custom field\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/customfields/{{$parameter[\"employmentCustomFieldId\"]}}"
						}
					}
				},
				{
					"name": "Put Employment Custom Field By Employment Custom Field ID",
					"value": "Put Employment Custom Field By Employment Custom Field ID",
					"action": "Edit an employment custom field record",
					"description": "__Activity name :__ PutEmploymentCustomFieldByEmploymentCustomFieldId\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding ` / metadata ` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/customfields/{{$parameter[\"employmentCustomFieldId\"]}}"
						}
					}
				},
				{
					"name": "Get Employment Custom Fieldss By Employment ID",
					"value": "Get Employment Custom Fieldss By Employment ID",
					"action": "List employment custom fields for an employment",
					"description": "__Activity name :__ GetEmploymentCustomFieldsByEmploymentId\n\nGet a list of the custom fields for an employment.\n\n__Note:__ custom fields are user defined at the employer level.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/customfields"
						}
					}
				},
				{
					"name": "Post Employment Custom Field By Employment ID",
					"value": "Post Employment Custom Field By Employment ID",
					"action": "Add an employment custom field for an employment",
					"description": "__Activity name :__ PostEmploymentCustomFieldByEmploymentId\n\n__Metadata:__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/customfields"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/customfields/{employmentCustomFieldId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Custom Field"
					],
					"operation": [
						"Delete Employment Custom Field By Employment Custom Field ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Custom Field ID",
			"name": "employmentCustomFieldId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Custom Field"
					],
					"operation": [
						"Delete Employment Custom Field By Employment Custom Field ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Delete Employment Custom Field By Employment Custom Field ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Delete Employment Custom Field By Employment Custom Field ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Delete Employment Custom Field By Employment Custom Field ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/customfields/{employmentCustomFieldId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Field By Employment Custom Field ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Custom Field ID",
			"name": "employmentCustomFieldId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Field By Employment Custom Field ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Field By Employment Custom Field ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Field By Employment Custom Field ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Field By Employment Custom Field ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Field By Employment Custom Field ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Field By Employment Custom Field ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Field By Employment Custom Field ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/customfields/{employmentCustomFieldId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Custom Field"
					],
					"operation": [
						"Put Employment Custom Field By Employment Custom Field ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Custom Field ID",
			"name": "employmentCustomFieldId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Custom Field"
					],
					"operation": [
						"Put Employment Custom Field By Employment Custom Field ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Put Employment Custom Field By Employment Custom Field ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Put Employment Custom Field By Employment Custom Field ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Put Employment Custom Field By Employment Custom Field ID"
					]
				}
			}
		},
		{
			"displayName": "Custom Field",
			"name": "customField",
			"type": "json",
			"default": "{\n  \"description\": \"Shoe size\",\n  \"id\": \"025ce09b-bff2-4b05-bcf0-711a89da7c08\"\n}",
			"description": "The custom field as defined at the employer-level.  The value can only be set in the POST (it cannot be changed with a PUT).\n",
			"routing": {
				"send": {
					"property": "customField",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Custom Field"
					],
					"operation": [
						"Put Employment Custom Field By Employment Custom Field ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Put Employment Custom Field By Employment Custom Field ID"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "41",
			"description": "The value for the custom field for the employment",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Custom Field"
					],
					"operation": [
						"Put Employment Custom Field By Employment Custom Field ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/customfields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Fieldss By Employment ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Fieldss By Employment ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Fieldss By Employment ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Fieldss By Employment ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Fieldss By Employment ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Fieldss By Employment ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Fieldss By Employment ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Get Employment Custom Fieldss By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/customfields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Custom Field"
					],
					"operation": [
						"Post Employment Custom Field By Employment ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Post Employment Custom Field By Employment ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Post Employment Custom Field By Employment ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Post Employment Custom Field By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Custom Field",
			"name": "customField",
			"type": "json",
			"default": "{\n  \"description\": \"Shoe size\",\n  \"id\": \"025ce09b-bff2-4b05-bcf0-711a89da7c08\"\n}",
			"description": "The custom field as defined at the employer-level.  The value can only be set in the POST (it cannot be changed with a PUT).\n",
			"routing": {
				"send": {
					"property": "customField",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Custom Field"
					],
					"operation": [
						"Post Employment Custom Field By Employment ID"
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
						"Employment Custom Field"
					],
					"operation": [
						"Post Employment Custom Field By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "41",
			"description": "The value for the custom field for the employment",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Custom Field"
					],
					"operation": [
						"Post Employment Custom Field By Employment ID"
					]
				}
			}
		},
];
