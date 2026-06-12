import type { INodeProperties } from 'n8n-workflow';

export const educationFurtherIndicationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Education Further Indication"
					]
				}
			},
			"options": [
				{
					"name": "Delete Education Further Indication By Education Further Indication ID",
					"value": "Delete Education Further Indication By Education Further Indication ID",
					"action": "Delete an education further indication record",
					"description": "__Activity name :__ DeleteEducationFurtherIndicationByEducationFurtherIndicationId\n\nDelete an existing education further indication record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/educationfurtherindications/{{$parameter[\"educationFurtherIndicationId\"]}}"
						}
					}
				},
				{
					"name": "Get Education Further Indication By Education Further Indication ID",
					"value": "Get Education Further Indication By Education Further Indication ID",
					"action": "Details of an education further indication",
					"description": "__Activity name :__ GetEducationFurtherIndicationByEducationFurtherIndicationId\n\nGet the details of an education further indication\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/educationfurtherindications/{{$parameter[\"educationFurtherIndicationId\"]}}"
						}
					}
				},
				{
					"name": "Put Education Further Indication By Education Further Indication ID",
					"value": "Put Education Further Indication By Education Further Indication ID",
					"action": "Edit an education further indication record",
					"description": "__Activity name :__ PutEducationFurtherIndicationByEducationFurtherIndicationId\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/educationfurtherindications/{{$parameter[\"educationFurtherIndicationId\"]}}"
						}
					}
				},
				{
					"name": "Get Education Further Indications By Employer ID",
					"value": "Get Education Further Indications By Employer ID",
					"action": "List education further indications for an employer",
					"description": "__Activity name :__ GetEducationFurtherIndicationsByEmployerId\n\nGet a list of the education further indications for an employer.\n\n__Note:__ The education further indications defined at the employer level can be used as value for the field furtherIndication in the Education resource at the employee level.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/educationfurtherindications"
						}
					}
				},
				{
					"name": "Post Education Further Indication By Employer ID",
					"value": "Post Education Further Indication By Employer ID",
					"action": "Add an education further indication for an employer",
					"description": "__Activity name :__ PostEducationFurtherIndicationByEmployerId\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/educationfurtherindications"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/educationfurtherindications/{educationFurtherIndicationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Further Indication"
					],
					"operation": [
						"Delete Education Further Indication By Education Further Indication ID"
					]
				}
			}
		},
		{
			"displayName": "Education Further Indication ID",
			"name": "educationFurtherIndicationId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Further Indication"
					],
					"operation": [
						"Delete Education Further Indication By Education Further Indication ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Delete Education Further Indication By Education Further Indication ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Delete Education Further Indication By Education Further Indication ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Delete Education Further Indication By Education Further Indication ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/educationfurtherindications/{educationFurtherIndicationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indication By Education Further Indication ID"
					]
				}
			}
		},
		{
			"displayName": "Education Further Indication ID",
			"name": "educationFurtherIndicationId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indication By Education Further Indication ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indication By Education Further Indication ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indication By Education Further Indication ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indication By Education Further Indication ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indication By Education Further Indication ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indication By Education Further Indication ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indication By Education Further Indication ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/educationfurtherindications/{educationFurtherIndicationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Further Indication"
					],
					"operation": [
						"Put Education Further Indication By Education Further Indication ID"
					]
				}
			}
		},
		{
			"displayName": "Education Further Indication ID",
			"name": "educationFurtherIndicationId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Further Indication"
					],
					"operation": [
						"Put Education Further Indication By Education Further Indication ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Put Education Further Indication By Education Further Indication ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Put Education Further Indication By Education Further Indication ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Put Education Further Indication By Education Further Indication ID"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"type": "string",
			"default": "lts",
			"description": "An unique code for the eduction further indication within the scope of the employer",
			"routing": {
				"send": {
					"property": "code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education Further Indication"
					],
					"operation": [
						"Put Education Further Indication By Education Further Indication ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Lagere technische school",
			"description": "The description of the education furhter indication",
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
						"Education Further Indication"
					],
					"operation": [
						"Put Education Further Indication By Education Further Indication ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Put Education Further Indication By Education Further Indication ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/educationfurtherindications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indications By Employer ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indications By Employer ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indications By Employer ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indications By Employer ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indications By Employer ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indications By Employer ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indications By Employer ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Get Education Further Indications By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/educationfurtherindications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Further Indication"
					],
					"operation": [
						"Post Education Further Indication By Employer ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Post Education Further Indication By Employer ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Post Education Further Indication By Employer ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Post Education Further Indication By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"type": "string",
			"default": "lts",
			"description": "An unique code for the eduction further indication within the scope of the employer",
			"routing": {
				"send": {
					"property": "code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Education Further Indication"
					],
					"operation": [
						"Post Education Further Indication By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Lagere technische school",
			"description": "The description of the education furhter indication",
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
						"Education Further Indication"
					],
					"operation": [
						"Post Education Further Indication By Employer ID"
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
						"Education Further Indication"
					],
					"operation": [
						"Post Education Further Indication By Employer ID"
					]
				}
			}
		},
];
