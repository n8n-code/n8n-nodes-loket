import type { INodeProperties } from 'n8n-workflow';

export const healthcareInsuranceActDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					]
				}
			},
			"options": [
				{
					"name": "Delete Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID",
					"value": "Delete Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID",
					"action": "Delete a specific Healthcare Insurance Act record",
					"description": "__Activity name:__ DeleteHealthcareInsuranceActConfigurationByHealthcareInsuranceActConfigurationId\n\nDelete a Healthcare Insurance Act record for the employment\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/healthcareinsuranceactconfigurations/{{$parameter[\"healthcareInsuranceActConfigurationId\"]}}"
						}
					}
				},
				{
					"name": "Get Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID",
					"value": "Get Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID",
					"action": "Details of a Healthcare Insurance Act record",
					"description": "__Activity name:__ GetHealthcareInsuranceActConfigurationByHealthcareInsuranceActConfigurationId\n\nGet the details of a Healthcare Insurance Act configuration record\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/healthcareinsuranceactconfigurations/{{$parameter[\"healthcareInsuranceActConfigurationId\"]}}"
						}
					}
				},
				{
					"name": "Put Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID",
					"value": "Put Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID",
					"action": "Edit the details of a Healthcare Insurance Act record",
					"description": "__Activity name:__ PutHealthcareInsuranceActConfigurationByHealthcareInsuranceActConfigurationId\n\nEdit the details for a Healthcare Insurance Act record\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/healthcareinsuranceactconfigurations/{{$parameter[\"healthcareInsuranceActConfigurationId\"]}}"
						}
					}
				},
				{
					"name": "Get Healthcare Insurance Act Configuration By Employment ID",
					"value": "Get Healthcare Insurance Act Configuration By Employment ID",
					"action": "List of Healthcare Insurance Act records for an employment",
					"description": "__Activity name:__ GetHealthcareInsuranceActConfigurationsByEmploymentId\n    \n\nGet the list of Healthcare Insurance Act configuration records for an employment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/healthcareinsuranceactconfigurations"
						}
					}
				},
				{
					"name": "Post Healthcare Insurance Act Configuration By Employment ID",
					"value": "Post Healthcare Insurance Act Configuration By Employment ID",
					"action": "Create a Healthcare Insurance Act record for an employment",
					"description": "__Activity name:__ PostHealthcareInsuranceActConfigurationByEmploymentId\n    \n\nCreate a Healthcare Insurance Act configuration record for an employment\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/healthcareinsuranceactconfigurations"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/healthcareinsuranceactconfigurations/{healthcareInsuranceActConfigurationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Delete Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Healthcare Insurance Act Configuration ID",
			"name": "healthcareInsuranceActConfigurationId",
			"required": true,
			"description": "The unique identifier of the Healthcare Insurance Act record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Delete Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Delete Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Delete Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Delete Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/healthcareinsuranceactconfigurations/{healthcareInsuranceActConfigurationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Get Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Healthcare Insurance Act Configuration ID",
			"name": "healthcareInsuranceActConfigurationId",
			"required": true,
			"description": "The unique identifier of the Healthcare Insurance Act record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Get Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Get Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Get Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/healthcareinsuranceactconfigurations/{healthcareInsuranceActConfigurationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Put Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Healthcare Insurance Act Configuration ID",
			"name": "healthcareInsuranceActConfigurationId",
			"required": true,
			"description": "The unique identifier of the Healthcare Insurance Act record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Put Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Put Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Put Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Put Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Additional Contribution Employer",
			"name": "additionalContributionEmployer",
			"type": "number",
			"default": 320,
			"description": "If applicable, please enter any additional contribution (extra bijdrage werkgever) for the employer in relation to the Healthcare Insurance Act (Zorgverzekeringswet).",
			"routing": {
				"send": {
					"property": "additionalContributionEmployer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Put Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Additional Premium",
			"name": "additionalPremium",
			"type": "number",
			"default": 120,
			"description": "Additional premium (aanvullende premie) on top of the nomial premium may be registered here, if applicable.",
			"routing": {
				"send": {
					"property": "additionalPremium",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Put Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Put Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Healthcare Insurance Act Type",
			"name": "healthcareInsuranceActType",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"(C/K) Wel verzekeringsplichtig, normaal tarief\"\n}",
			"description": "Indicates what type of Health Care Insurance Act (Zvw) is applicable for this employment",
			"routing": {
				"send": {
					"property": "healthcareInsuranceActType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Put Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Put Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Nominal Premium",
			"name": "nominalPremium",
			"type": "number",
			"default": 320,
			"description": "A nominal premium (nominale premie) for the Healthcare Insurance Act may be registered here, if applicable.",
			"routing": {
				"send": {
					"property": "nominalPremium",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Put Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The start date of the entity.\n\nA (linked chain)[./#section/Data/Date-chains] is maintained within this resource.",
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Put Healthcare Insurance Act Configuration By Healthcare Insurance Act Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/healthcareinsuranceactconfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Get Healthcare Insurance Act Configuration By Employment ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Get Healthcare Insurance Act Configuration By Employment ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Get Healthcare Insurance Act Configuration By Employment ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Get Healthcare Insurance Act Configuration By Employment ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Get Healthcare Insurance Act Configuration By Employment ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Get Healthcare Insurance Act Configuration By Employment ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Get Healthcare Insurance Act Configuration By Employment ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Get Healthcare Insurance Act Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/healthcareinsuranceactconfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Post Healthcare Insurance Act Configuration By Employment ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Post Healthcare Insurance Act Configuration By Employment ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Post Healthcare Insurance Act Configuration By Employment ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Post Healthcare Insurance Act Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Additional Contribution Employer",
			"name": "additionalContributionEmployer",
			"type": "number",
			"default": 320,
			"description": "If applicable, please enter any additional contribution (extra bijdrage werkgever) for the employer in relation to the Healthcare Insurance Act (Zorgverzekeringswet).",
			"routing": {
				"send": {
					"property": "additionalContributionEmployer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Post Healthcare Insurance Act Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Additional Premium",
			"name": "additionalPremium",
			"type": "number",
			"default": 120,
			"description": "Additional premium (aanvullende premie) on top of the nomial premium may be registered here, if applicable.",
			"routing": {
				"send": {
					"property": "additionalPremium",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Post Healthcare Insurance Act Configuration By Employment ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Post Healthcare Insurance Act Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Healthcare Insurance Act Type",
			"name": "healthcareInsuranceActType",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"(C/K) Wel verzekeringsplichtig, normaal tarief\"\n}",
			"description": "Indicates what type of Health Care Insurance Act (Zvw) is applicable for this employment",
			"routing": {
				"send": {
					"property": "healthcareInsuranceActType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Post Healthcare Insurance Act Configuration By Employment ID"
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Post Healthcare Insurance Act Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Nominal Premium",
			"name": "nominalPremium",
			"type": "number",
			"default": 320,
			"description": "A nominal premium (nominale premie) for the Healthcare Insurance Act may be registered here, if applicable.",
			"routing": {
				"send": {
					"property": "nominalPremium",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Healthcare Insurance Act"
					],
					"operation": [
						"Post Healthcare Insurance Act Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The start date of the entity.\n\nA (linked chain)[./#section/Data/Date-chains] is maintained within this resource.",
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
						"Healthcare Insurance Act"
					],
					"operation": [
						"Post Healthcare Insurance Act Configuration By Employment ID"
					]
				}
			}
		},
];
