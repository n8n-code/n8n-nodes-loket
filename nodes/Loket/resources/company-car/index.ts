import type { INodeProperties } from 'n8n-workflow';

export const companyCarDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					]
				}
			},
			"options": [
				{
					"name": "Delete Company Car By Company Car ID",
					"value": "Delete Company Car By Company Car ID",
					"action": "Delete a specific company car record",
					"description": "__Activity name:__ DeleteCompanyCarByCompanyCarId\n\nDelete a company car record for the employment\n\nPlease note this resource is related for the registration of the company car for HRM purposes. This resource is NOT related to the registration of the fiscal company car(s) which is used in salary calculations.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/companycars/{{$parameter[\"companyCarId\"]}}"
						}
					}
				},
				{
					"name": "Get Company Car By Company Car ID",
					"value": "Get Company Car By Company Car ID",
					"action": "Details of a company car record",
					"description": "__Activity name:__ GetCompanyCarByCompanyCarId\n\n\n Get the details of a company car \n\n\nPlease note this resource is related for the registration of the company car for HRM purposes. This resource is NOT related to the registration of the fiscal company car(s) which is used in salary calculations.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/companycars/{{$parameter[\"companyCarId\"]}}"
						}
					}
				},
				{
					"name": "Put Company Car By Company Car ID",
					"value": "Put Company Car By Company Car ID",
					"action": "Edit the details of a company car record",
					"description": "__Activity name:__ PutCompanyCarByCompanyCarId\n\n\n Edit the details for a company car record.\n\n\nPlease note this resource is related for the registration of the company car for HRM purposes. This resource is NOT related to the registration of the fiscal company car(s) which is used in salary calculations.\n\n\n __Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/companycars/{{$parameter[\"companyCarId\"]}}"
						}
					}
				},
				{
					"name": "Get Company Cars By Employment ID",
					"value": "Get Company Cars By Employment ID",
					"action": "List of  company cars for an employment",
					"description": "__Activity name:__ GetCompanyCarsByEmploymentId\n    \n\nGet the list of company cars for an employment. \n\nPlease note this resource is related for the registration of the company car for HRM purposes. This resource is NOT related to the registration of the fiscal company car(s) which is used in salary calculations.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/companycars"
						}
					}
				},
				{
					"name": "Post Company Car By Employment ID",
					"value": "Post Company Car By Employment ID",
					"action": "Create a company car record for an employment",
					"description": "__Activity name:__ PostCompanyCarByEmploymentId\n    \n\nCreate a company car record for an employment.\n\nPlease note this resource is related for the registration of the company car for HRM purposes. This resource is NOT related to the registration of the fiscal company car(s) which is used in salary calculations.\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ There are no defaults available.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/companycars"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/companycars/{companyCarId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Delete Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Company Car ID",
			"name": "companyCarId",
			"required": true,
			"description": "The unique identifier of the company car",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Delete Company Car By Company Car ID"
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
						"Company Car"
					],
					"operation": [
						"Delete Company Car By Company Car ID"
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
						"Company Car"
					],
					"operation": [
						"Delete Company Car By Company Car ID"
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
						"Company Car"
					],
					"operation": [
						"Delete Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/companycars/{companyCarId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Get Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Company Car ID",
			"name": "companyCarId",
			"required": true,
			"description": "The unique identifier of the company car",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Get Company Car By Company Car ID"
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
						"Company Car"
					],
					"operation": [
						"Get Company Car By Company Car ID"
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
						"Company Car"
					],
					"operation": [
						"Get Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/companycars/{companyCarId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Company Car ID",
			"name": "companyCarId",
			"required": true,
			"description": "The unique identifier of the company car",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
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
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
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
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
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
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Brand",
			"name": "brand",
			"type": "string",
			"default": "Volvo",
			"description": "Brand of the vehicle.\n",
			"routing": {
				"send": {
					"property": "brand",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Catalog Value",
			"name": "catalogValue",
			"type": "number",
			"default": 20000,
			"description": "The catalog value of the car.\n",
			"routing": {
				"send": {
					"property": "catalogValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "This car is very nice",
			"description": "Any comments on the car or the contract.\n",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2023-10-23",
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
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Fuel Card Number",
			"name": "fuelCardNumber",
			"type": "string",
			"default": "B100.323.903",
			"description": "Registration number of the fuel card.\n",
			"routing": {
				"send": {
					"property": "fuelCardNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
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
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Kilometers Private Use",
			"name": "kilometersPrivateUse",
			"type": "number",
			"default": 10000,
			"description": "The number kilometers per year the employee can use the car for private purposes.\n",
			"routing": {
				"send": {
					"property": "kilometersPrivateUse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Lease",
			"name": "lease",
			"type": "json",
			"default": "{\n  \"contractNumber\": \"2021.323.903\",\n  \"endDate\": \"2023-10-23\",\n  \"startDate\": \"2021-01-01\"\n}",
			"description": "Details of the leasecontract\n",
			"routing": {
				"send": {
					"property": "lease",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Lease Or Buy",
			"name": "leaseOrBuy",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Koop\"\n}",
			"description": "Indication of the ownership of the company car.\n",
			"routing": {
				"send": {
					"property": "leaseOrBuy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "License Plate Number",
			"name": "licensePlateNumber",
			"type": "string",
			"default": "GP586D",
			"description": "Vehicle registration number (license plate) of the  company car. The number should be provided with or without any hyphens (-).\n",
			"routing": {
				"send": {
					"property": "licensePlateNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "model",
			"type": "string",
			"default": "V60",
			"description": "Model of the vehicle.\n",
			"routing": {
				"send": {
					"property": "model",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2021-01-01",
			"description": "The start date of the entity.",
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
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Supplier",
			"name": "supplier",
			"type": "string",
			"default": "Leasemaatschappij Tilburg",
			"description": "Name of the company the delivered the company car.\n",
			"routing": {
				"send": {
					"property": "supplier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Put Company Car By Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/companycars",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Get Company Cars By Employment ID"
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
						"Company Car"
					],
					"operation": [
						"Get Company Cars By Employment ID"
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
						"Company Car"
					],
					"operation": [
						"Get Company Cars By Employment ID"
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
						"Company Car"
					],
					"operation": [
						"Get Company Cars By Employment ID"
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
						"Company Car"
					],
					"operation": [
						"Get Company Cars By Employment ID"
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
						"Company Car"
					],
					"operation": [
						"Get Company Cars By Employment ID"
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
						"Company Car"
					],
					"operation": [
						"Get Company Cars By Employment ID"
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
						"Company Car"
					],
					"operation": [
						"Get Company Cars By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/companycars",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
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
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
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
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
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
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Brand",
			"name": "brand",
			"type": "string",
			"default": "Volvo",
			"description": "Brand of the vehicle.\n",
			"routing": {
				"send": {
					"property": "brand",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Catalog Value",
			"name": "catalogValue",
			"type": "number",
			"default": 20000,
			"description": "The catalog value of the car.\n",
			"routing": {
				"send": {
					"property": "catalogValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "This car is very nice",
			"description": "Any comments on the car or the contract.\n",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2023-10-23",
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
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Fuel Card Number",
			"name": "fuelCardNumber",
			"type": "string",
			"default": "B100.323.903",
			"description": "Registration number of the fuel card.\n",
			"routing": {
				"send": {
					"property": "fuelCardNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
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
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Kilometers Private Use",
			"name": "kilometersPrivateUse",
			"type": "number",
			"default": 10000,
			"description": "The number kilometers per year the employee can use the car for private purposes.\n",
			"routing": {
				"send": {
					"property": "kilometersPrivateUse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Lease",
			"name": "lease",
			"type": "json",
			"default": "{\n  \"contractNumber\": \"2021.323.903\",\n  \"endDate\": \"2023-10-23\",\n  \"startDate\": \"2021-01-01\"\n}",
			"description": "Details of the leasecontract\n",
			"routing": {
				"send": {
					"property": "lease",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Lease Or Buy",
			"name": "leaseOrBuy",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Koop\"\n}",
			"description": "Indication of the ownership of the company car.\n",
			"routing": {
				"send": {
					"property": "leaseOrBuy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "License Plate Number",
			"name": "licensePlateNumber",
			"type": "string",
			"default": "GP586D",
			"description": "Vehicle registration number (license plate) of the  company car. The number should be provided with or without any hyphens (-).\n",
			"routing": {
				"send": {
					"property": "licensePlateNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "model",
			"type": "string",
			"default": "V60",
			"description": "Model of the vehicle.\n",
			"routing": {
				"send": {
					"property": "model",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2021-01-01",
			"description": "The start date of the entity.",
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
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Supplier",
			"name": "supplier",
			"type": "string",
			"default": "Leasemaatschappij Tilburg",
			"description": "Name of the company the delivered the company car.\n",
			"routing": {
				"send": {
					"property": "supplier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Car"
					],
					"operation": [
						"Post Company Car By Employment ID"
					]
				}
			}
		},
];
