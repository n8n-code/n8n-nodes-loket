import type { INodeProperties } from 'n8n-workflow';

export const socialSecurityBenefitsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security Benefits"
					]
				}
			},
			"options": [
				{
					"name": "Delete Social Security Benefit By Social Security Benefit ID",
					"value": "Delete Social Security Benefit By Social Security Benefit ID",
					"action": "Delete a specific social security benefits record",
					"description": "__Activity name:__ DeleteSocialSecurityBenefitBySocialSecurityBenefitId\n\nDelete a social security record for the employment\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/socialsecuritybenefits/{{$parameter[\"socialSecurityBenefitId\"]}}"
						}
					}
				},
				{
					"name": "Get Social Security Benefit By Social Security Benefit ID",
					"value": "Get Social Security Benefit By Social Security Benefit ID",
					"action": "Details of a social security benefits record",
					"description": "__Activity name:__ GetSocialSecurityBenefitBySocialSecurityBenefitId\n\nGet the details of a social security benefits record\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/socialsecuritybenefits/{{$parameter[\"socialSecurityBenefitId\"]}}"
						}
					}
				},
				{
					"name": "Put Social Security Benefit By Social Security Benefit ID",
					"value": "Put Social Security Benefit By Social Security Benefit ID",
					"action": "Edit the details of a social security benefits record",
					"description": "__Activity name:__ PutSocialSecurityBenefitBySocialSecurityBenefitId\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n\nEdit the details for a social security record\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/socialsecuritybenefits/{{$parameter[\"socialSecurityBenefitId\"]}}"
						}
					}
				},
				{
					"name": "Get Social Security Benefit By Employment ID",
					"value": "Get Social Security Benefit By Employment ID",
					"action": "List of social security benefits records for an employment",
					"description": "__Activity name:__ GetSocialSecurityBenefitsByEmploymentId\n    \n\nGet the list of social security benefits records for an employment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/socialsecuritybenefits"
						}
					}
				},
				{
					"name": "Post Social Security Benefit By Employment ID",
					"value": "Post Social Security Benefit By Employment ID",
					"action": "Create a social security benefits record for an employment",
					"description": "__Activity name:__ PostSocialSecurityBenefitByEmploymentId\n    \n\nCreate a social security benefits record for an employment\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/socialsecuritybenefits"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/socialsecuritybenefits/{socialSecurityBenefitId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security Benefits"
					],
					"operation": [
						"Delete Social Security Benefit By Social Security Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "Social Security Benefit ID",
			"name": "socialSecurityBenefitId",
			"required": true,
			"description": "The unique identifier of the social security record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security Benefits"
					],
					"operation": [
						"Delete Social Security Benefit By Social Security Benefit ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Delete Social Security Benefit By Social Security Benefit ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Delete Social Security Benefit By Social Security Benefit ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Delete Social Security Benefit By Social Security Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/socialsecuritybenefits/{socialSecurityBenefitId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security Benefits"
					],
					"operation": [
						"Get Social Security Benefit By Social Security Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "Social Security Benefit ID",
			"name": "socialSecurityBenefitId",
			"required": true,
			"description": "The unique identifier of the social security record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security Benefits"
					],
					"operation": [
						"Get Social Security Benefit By Social Security Benefit ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Get Social Security Benefit By Social Security Benefit ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Get Social Security Benefit By Social Security Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/socialsecuritybenefits/{socialSecurityBenefitId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security Benefits"
					],
					"operation": [
						"Put Social Security Benefit By Social Security Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "Social Security Benefit ID",
			"name": "socialSecurityBenefitId",
			"required": true,
			"description": "The unique identifier of the social security record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security Benefits"
					],
					"operation": [
						"Put Social Security Benefit By Social Security Benefit ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Put Social Security Benefit By Social Security Benefit ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Put Social Security Benefit By Social Security Benefit ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Put Social Security Benefit By Social Security Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "Benefit",
			"name": "benefit",
			"type": "json",
			"default": "{\n  \"percentage\": 35\n}",
			"routing": {
				"send": {
					"property": "benefit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security Benefits"
					],
					"operation": [
						"Put Social Security Benefit By Social Security Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/socialsecuritybenefits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security Benefits"
					],
					"operation": [
						"Get Social Security Benefit By Employment ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Get Social Security Benefit By Employment ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Get Social Security Benefit By Employment ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Get Social Security Benefit By Employment ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Get Social Security Benefit By Employment ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Get Social Security Benefit By Employment ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Get Social Security Benefit By Employment ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Get Social Security Benefit By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/socialsecuritybenefits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security Benefits"
					],
					"operation": [
						"Post Social Security Benefit By Employment ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Post Social Security Benefit By Employment ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Post Social Security Benefit By Employment ID"
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
						"Social Security Benefits"
					],
					"operation": [
						"Post Social Security Benefit By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Benefit",
			"name": "benefit",
			"type": "json",
			"default": "{\n  \"percentage\": 35,\n  \"type\": {\n    \"key\": 1,\n    \"value\": \"ZW eigen risico\"\n  }\n}",
			"routing": {
				"send": {
					"property": "benefit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security Benefits"
					],
					"operation": [
						"Post Social Security Benefit By Employment ID"
					]
				}
			}
		},
];
