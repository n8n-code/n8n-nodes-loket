import type { INodeProperties } from 'n8n-workflow';

export const employerDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					]
				}
			},
			"options": [
				{
					"name": "Get Employers By User ID",
					"value": "Get Employers By User ID",
					"action": "List of employers",
					"description": "__Activity name :__ GetEmployersByUserId\n\nGet a list of all employers accessible to the current user\n\nPlease note the following general remark regarding the Loket API. If an id is required as a path parameter, in almost all cases the UUID of the specific resource should be used. In the employer resource this corresponds to the the 'id' field, as is typical. (so do NOT use employerNumber as your path parameter for any following requests)\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers"
						}
					}
				},
				{
					"name": "Get Employers Minimized By User",
					"value": "Get Employers Minimized By User",
					"action": "List of employers with fewer fields for performance reasons",
					"description": "__Activity name :__ GetEmployersMinimizedByUser\n\nGet a list of all employers accessible to the current user.  With this endpoint we introduced the \"Minimized\" resource which contains fewer fields then `/providers/employers`. This version should increase performance when requesting employments for large employers.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/minimized"
						}
					}
				},
				{
					"name": "Get Employer By Employer ID",
					"value": "Get Employer By Employer ID",
					"action": "Details of an employer",
					"description": "__Activity name :__ GetEmployerByEmployerId\n\nGet the details of a single employers\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}"
						}
					}
				},
				{
					"name": "Put Employer By Employer ID",
					"value": "Put Employer By Employer ID",
					"action": "Edit the details of an employer",
					"description": "__Activity name:__ PutEmployerByEmployerId\n\nEdit the details of an employer\n\nPossible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}"
						}
					}
				},
				{
					"name": "Delete Employer Logo By Employer ID",
					"value": "Delete Employer Logo By Employer ID",
					"action": "Delete the employer logo",
					"description": "__Activity name:__ DeleteEmployerLogoByEmployerId\n\nDelete the logo of an employer\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/logo"
						}
					}
				},
				{
					"name": "Get Employer Logo By Employer ID",
					"value": "Get Employer Logo By Employer ID",
					"action": "Logo of an employer",
					"description": "__Activity name :__ GetEmployerLogoByEmployerId\n\nThis activity is listed twice in the documentation due to the specified version caching path parameter. Including or exluding this parameter results in slightly different behaviour.\n\n__Caching:__ This resource changes very infrequently and can be cached for a longer period.\n\nGet the logo of the employer. In case no logo is know the service will return a 404.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/logo"
						}
					}
				},
				{
					"name": "Post Employer Logo By Employer ID",
					"value": "Post Employer Logo By Employer ID",
					"action": "Upload a logo for the employer",
					"description": "__Activity name :__ PostEmployerLogoByEmployerId\n\nUpload a logo for the employer.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/logo"
						}
					}
				},
				{
					"name": "Get Employer Logo By Employer ID And Version",
					"value": "Get Employer Logo By Employer ID And Version",
					"action": "Logo of an employer",
					"description": "__Activity name :__ GetEmployerLogoByEmployerId\n\nThis activity is listed twice in the documentation due to the specified version caching path parameter. Including or exluding this parameter results in slightly different behaviour.\n\n__Caching:__ This resource changes very infrequently and can be cached for a longer period.\n\nGet the logo of the employer. In case no logo is know the service will return a 404.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/logo/{{$parameter[\"version\"]}}"
						}
					}
				},
				{
					"name": "Get Provider Logo By Employer ID",
					"value": "Get Provider Logo By Employer ID",
					"action": "Provider logo",
					"description": "__Activity name :__ GetProviderLogoByEmployerId\n\nThis activity is listed twice in the documentation due to the specified version caching path parameter. Including or exluding this parameter results in slightly different behaviour.\n\nGet the (deviating) provider logo of the employers. In case no logo is know the service will return a 404.\n\n__Caching:__ This resource changes very infrequently and can be cached for a longer time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/providerlogo"
						}
					}
				},
				{
					"name": "Get Provider Logo By Employer ID And Version",
					"value": "Get Provider Logo By Employer ID And Version",
					"action": "Provider logo",
					"description": "__Activity name :__ GetProviderLogoByEmployerId\n\nThis activity is listed twice in the documentation due to the specified version caching path parameter. Including or exluding this parameter results in slightly different behaviour.\n\nGet the (deviating) provider logo of the employers. In case no logo is know the service will return a 404.\n\n__Caching:__ This resource changes very infrequently and can be cached for a longer time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/providerlogo/{{$parameter[\"version\"]}}"
						}
					}
				},
				{
					"name": "Post Employer By Provider ID",
					"value": "Post Employer By Provider ID",
					"action": "Create an employer",
					"description": "__Activity name :__ PostEmployerByProviderId\n\nCreate an employee for the provider (administratiekantoor) identified by the given providerId.\nPlease take note of the following; a newly created Employer is not immediately accessible for the user. As this would require adding the Employer to a specific Loket team (which is a separate activity)\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/employers"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Get Employers By User ID"
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
						"Employer"
					],
					"operation": [
						"Get Employers By User ID"
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
						"Employer"
					],
					"operation": [
						"Get Employers By User ID"
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
						"Employer"
					],
					"operation": [
						"Get Employers By User ID"
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
						"Employer"
					],
					"operation": [
						"Get Employers By User ID"
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
						"Employer"
					],
					"operation": [
						"Get Employers By User ID"
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
						"Employer"
					],
					"operation": [
						"Get Employers By User ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/minimized",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Get Employers Minimized By User"
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
						"Employer"
					],
					"operation": [
						"Get Employers Minimized By User"
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
						"Employer"
					],
					"operation": [
						"Get Employers Minimized By User"
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
						"Employer"
					],
					"operation": [
						"Get Employers Minimized By User"
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
						"Employer"
					],
					"operation": [
						"Get Employers Minimized By User"
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
						"Employer"
					],
					"operation": [
						"Get Employers Minimized By User"
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
						"Employer"
					],
					"operation": [
						"Get Employers Minimized By User"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Get Employer By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Get Employer By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Get Employer By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Get Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/{employerId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{\n  \"city\": \"Leiden\",\n  \"country\": {\n    \"isoCode\": \"NL\",\n    \"key\": 1,\n    \"value\": \"Netherlands\"\n  },\n  \"furtherIndication\": {\n    \"key\": 1,\n    \"value\": \"WW\"\n  },\n  \"houseNumber\": 12,\n  \"houseNumberAddition\": \"D\",\n  \"location\": \"Fourth floor or building C\",\n  \"postalCode\": \"1234AA\",\n  \"province\": {\n    \"key\": 1,\n    \"value\": \"Noord-Holland\"\n  },\n  \"street\": \"Voordijk\"\n}",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Branch",
			"name": "branch",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Landbouw en jacht\"\n}",
			"routing": {
				"send": {
					"property": "branch",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Chamber Of Commerce Number",
			"name": "chamberOfCommerceNumber",
			"type": "string",
			"default": "18124676",
			"description": "Chamber of commerce number. In Dutch \"Kamer van koophandel\" number",
			"routing": {
				"send": {
					"property": "chamberOfCommerceNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Company Name",
			"name": "companyName",
			"type": "string",
			"default": "Voorbeeld B.V.",
			"description": "Name of the company",
			"routing": {
				"send": {
					"property": "companyName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Contact",
			"name": "contact",
			"type": "json",
			"default": "{\n  \"function\": \"Manager\",\n  \"name\": \"Henk de Vries\",\n  \"phoneNumber\": \"013-12345678\"\n}",
			"routing": {
				"send": {
					"property": "contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Contact Information",
			"name": "contactInformation",
			"type": "json",
			"default": "{\n  \"emailAddress\": \"info@voorbeeldbv.nl\",\n  \"faxNumber\": \"(088) 31 11149\",\n  \"phoneNumber\": \"(088) 31 11150\",\n  \"website\": \"www.voorbeeldbv.nl\"\n}",
			"routing": {
				"send": {
					"property": "contactInformation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Postal Address",
			"name": "deviatingPostalAddress",
			"type": "json",
			"default": "{\n  \"city\": \"Leiden\",\n  \"country\": {\n    \"isoCode\": \"NL\",\n    \"key\": 1,\n    \"value\": \"Netherlands\"\n  },\n  \"furtherIndication\": {\n    \"key\": 1,\n    \"value\": \"WW\"\n  },\n  \"houseNumber\": 12,\n  \"houseNumberAddition\": \"D\",\n  \"location\": \"Fourth floor or building C\",\n  \"poBox\": 5000,\n  \"postalCode\": \"1234 AA\",\n  \"street\": \"Voordijk\"\n}",
			"routing": {
				"send": {
					"property": "deviatingPostalAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employer Logo",
			"name": "employerLogo",
			"type": "string",
			"default": "https://api.loket.nl/v2/providers/employers/{guid}/logo/{version}",
			"description": "The location of the logo of the employer. The last part of the returned endpoint is the version of the logo this allows users to cache the image. Changing the value of the version will not influence the output.",
			"routing": {
				"send": {
					"property": "employerLogo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employer Number",
			"name": "employerNumber",
			"type": "number",
			"default": 20720,
			"description": "The employer number is used in various overviews and exports to identify a specific employer in Loket (please note: this is not the identifier used in the REST API).",
			"routing": {
				"send": {
					"property": "employerNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Legal Form",
			"name": "legalForm",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"B.V.\"\n}",
			"routing": {
				"send": {
					"property": "legalForm",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Provider Logo",
			"name": "providerLogo",
			"type": "string",
			"default": "https://api.loket.nl/v2/providers/employers/{guid}/deviatingproviderlogo",
			"description": "This logo is displayed in the interface of loket.nl. if null no deviating logo is present and the normal provider logo should be used (aquire the URL to the logo via ../v2/providers)",
			"routing": {
				"send": {
					"property": "providerLogo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Provider Settings",
			"name": "providerSettings",
			"type": "json",
			"default": "{\n  \"administrationNumber\": \"SR2\",\n  \"groupCode\": 40,\n  \"parentEmployerForConsolidatedOverviews\": 9933,\n  \"sendEmailWhenSalarySlipIsAvailable\": true\n}",
			"routing": {
				"send": {
					"property": "providerSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Sbi",
			"name": "sbi",
			"type": "json",
			"default": "{\n  \"key\": 12,\n  \"sbiCode\": \"0116\",\n  \"value\": \"Agriculture, Forestry and Fishing\"\n}",
			"description": "The 'Standard Industrial Classifications (Dutch SBI 2008, NACE and ISIC)' as defined bij the Dutch chamber of commerce",
			"routing": {
				"send": {
					"property": "sbi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Put Employer By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/{employerId}/logo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Delete Employer Logo By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Delete Employer Logo By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Delete Employer Logo By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Delete Employer Logo By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/logo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Get Employer Logo By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Get Employer Logo By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Get Employer Logo By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Get Employer Logo By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/logo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer Logo By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Post Employer Logo By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Post Employer Logo By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Post Employer Logo By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Data",
			"name": "data",
			"type": "string",
			"default": "YQ==",
			"description": "base64 encoded document file.",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer Logo By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Mime Type",
			"name": "mimeType",
			"type": "string",
			"default": "image/jpeg",
			"description": "The mimetype of the data.",
			"routing": {
				"send": {
					"property": "mimeType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer Logo By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/logo/{version}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Get Employer Logo By Employer ID And Version"
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
						"Employer"
					],
					"operation": [
						"Get Employer Logo By Employer ID And Version"
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
						"Employer"
					],
					"operation": [
						"Get Employer Logo By Employer ID And Version"
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
						"Employer"
					],
					"operation": [
						"Get Employer Logo By Employer ID And Version"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": "An optional guid generated for caching. The value does not influence the output of this function. The Employer resource returns the URI of the current logo.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Get Employer Logo By Employer ID And Version"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/providerlogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Get Provider Logo By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Get Provider Logo By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Get Provider Logo By Employer ID"
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
						"Employer"
					],
					"operation": [
						"Get Provider Logo By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/providerlogo/{version}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Get Provider Logo By Employer ID And Version"
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
						"Employer"
					],
					"operation": [
						"Get Provider Logo By Employer ID And Version"
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
						"Employer"
					],
					"operation": [
						"Get Provider Logo By Employer ID And Version"
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
						"Employer"
					],
					"operation": [
						"Get Provider Logo By Employer ID And Version"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": "An optional guid generated for caching. The value does not influence the output of this function. The Employer resource returns the URI of the current logo.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Get Provider Logo By Employer ID And Version"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/{providerId}/employers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Provider ID",
			"name": "providerId",
			"required": true,
			"description": "The unique identifier of a provider",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
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
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
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
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{\n  \"city\": \"Leiden\",\n  \"country\": {\n    \"isoCode\": \"NL\",\n    \"key\": 1,\n    \"value\": \"Netherlands\"\n  },\n  \"furtherIndication\": {\n    \"key\": 1,\n    \"value\": \"WW\"\n  },\n  \"houseNumber\": 12,\n  \"houseNumberAddition\": \"D\",\n  \"location\": \"Fourth floor or building C\",\n  \"postalCode\": \"1234AA\",\n  \"province\": {\n    \"key\": 1,\n    \"value\": \"Noord-Holland\"\n  },\n  \"street\": \"Voordijk\"\n}",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Branch",
			"name": "branch",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Landbouw en jacht\"\n}",
			"routing": {
				"send": {
					"property": "branch",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Chamber Of Commerce Number",
			"name": "chamberOfCommerceNumber",
			"type": "string",
			"default": "18124676",
			"description": "Chamber of commerce number. In Dutch \"Kamer van koophandel\" number",
			"routing": {
				"send": {
					"property": "chamberOfCommerceNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Company Name",
			"name": "companyName",
			"type": "string",
			"default": "Voorbeeld B.V.",
			"description": "Name of the company",
			"routing": {
				"send": {
					"property": "companyName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Contact",
			"name": "contact",
			"type": "json",
			"default": "{\n  \"function\": \"Manager\",\n  \"name\": \"Henk de Vries\",\n  \"phoneNumber\": \"013-12345678\"\n}",
			"routing": {
				"send": {
					"property": "contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Contact Information",
			"name": "contactInformation",
			"type": "json",
			"default": "{\n  \"emailAddress\": \"info@voorbeeldbv.nl\",\n  \"faxNumber\": \"(088) 31 11149\",\n  \"phoneNumber\": \"(088) 31 11150\",\n  \"website\": \"www.voorbeeldbv.nl\"\n}",
			"routing": {
				"send": {
					"property": "contactInformation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Postal Address",
			"name": "deviatingPostalAddress",
			"type": "json",
			"default": "{\n  \"city\": \"Leiden\",\n  \"country\": {\n    \"isoCode\": \"NL\",\n    \"key\": 1,\n    \"value\": \"Netherlands\"\n  },\n  \"furtherIndication\": {\n    \"key\": 1,\n    \"value\": \"WW\"\n  },\n  \"houseNumber\": 12,\n  \"houseNumberAddition\": \"D\",\n  \"location\": \"Fourth floor or building C\",\n  \"poBox\": 5000,\n  \"postalCode\": \"1234 AA\",\n  \"street\": \"Voordijk\"\n}",
			"routing": {
				"send": {
					"property": "deviatingPostalAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Employer Logo",
			"name": "employerLogo",
			"type": "string",
			"default": "https://api.loket.nl/v2/providers/employers/{guid}/logo/{version}",
			"description": "The location of the logo of the employer. The last part of the returned endpoint is the version of the logo this allows users to cache the image. Changing the value of the version will not influence the output.",
			"routing": {
				"send": {
					"property": "employerLogo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Employer Number",
			"name": "employerNumber",
			"type": "number",
			"default": 20720,
			"description": "The employer number is used in various overviews and exports to identify a specific employer in Loket (please note: this is not the identifier used in the REST API).",
			"routing": {
				"send": {
					"property": "employerNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
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
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Legal Form",
			"name": "legalForm",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"B.V.\"\n}",
			"routing": {
				"send": {
					"property": "legalForm",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Provider Logo",
			"name": "providerLogo",
			"type": "string",
			"default": "https://api.loket.nl/v2/providers/employers/{guid}/deviatingproviderlogo",
			"description": "This logo is displayed in the interface of loket.nl. if null no deviating logo is present and the normal provider logo should be used (aquire the URL to the logo via ../v2/providers)",
			"routing": {
				"send": {
					"property": "providerLogo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Provider Settings",
			"name": "providerSettings",
			"type": "json",
			"default": "{\n  \"administrationNumber\": \"SR2\",\n  \"groupCode\": 40,\n  \"parentEmployerForConsolidatedOverviews\": 9933,\n  \"sendEmailWhenSalarySlipIsAvailable\": true\n}",
			"routing": {
				"send": {
					"property": "providerSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Sbi",
			"name": "sbi",
			"type": "json",
			"default": "{\n  \"key\": 12,\n  \"sbiCode\": \"0116\",\n  \"value\": \"Agriculture, Forestry and Fishing\"\n}",
			"description": "The 'Standard Industrial Classifications (Dutch SBI 2008, NACE and ISIC)' as defined bij the Dutch chamber of commerce",
			"routing": {
				"send": {
					"property": "sbi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer"
					],
					"operation": [
						"Post Employer By Provider ID"
					]
				}
			}
		},
];
