import type { INodeProperties } from 'n8n-workflow';

export const socialSecurityDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					]
				}
			},
			"options": [
				{
					"name": "Delete Social Security Configuration By Social Security Configuration ID",
					"value": "Delete Social Security Configuration By Social Security Configuration ID",
					"action": "Delete a specific social security record",
					"description": "__Activity name:__ DeleteSocialSecurityConfigurationBySocialSecurityConfigurationId\n\nDelete a social security record for the employment\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/socialsecurityconfigurations/{{$parameter[\"socialSecurityConfigurationId\"]}}"
						}
					}
				},
				{
					"name": "Get Social Security Configuration By Social Security Configuration ID",
					"value": "Get Social Security Configuration By Social Security Configuration ID",
					"action": "Details of a social security record",
					"description": "__Activity name:__ GetSocialSecurityConfigurationBySocialSecurityConfigurationId\n\nGet the details of a social security configuration record\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/socialsecurityconfigurations/{{$parameter[\"socialSecurityConfigurationId\"]}}"
						}
					}
				},
				{
					"name": "Put Social Security Configuration By Social Security Configuration ID",
					"value": "Put Social Security Configuration By Social Security Configuration ID",
					"action": "Edit the details of a social security record",
					"description": "__Activity name:__ PutSocialSecurityConfigurationBySocialSecurityConfigurationId\n\nEdit the details for a social security record\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/socialsecurityconfigurations/{{$parameter[\"socialSecurityConfigurationId\"]}}"
						}
					}
				},
				{
					"name": "Get Social Security Configuration By Employment ID",
					"value": "Get Social Security Configuration By Employment ID",
					"action": "List of social security records for an employment",
					"description": "__Activity name:__ GetSocialSecurityConfigurationsByEmploymentId\n    \n\nGet the list of social security configuration records for an employment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/socialsecurityconfigurations"
						}
					}
				},
				{
					"name": "Post Social Security Configuration By Employment ID",
					"value": "Post Social Security Configuration By Employment ID",
					"action": "Create a social security record for an employment",
					"description": "__Activity name:__ PostSocialSecurityConfigurationByEmploymentId\n    \n\nCreate a social security configuration record for an employment\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/socialsecurityconfigurations"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/socialsecurityconfigurations/{socialSecurityConfigurationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					],
					"operation": [
						"Delete Social Security Configuration By Social Security Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Social Security Configuration ID",
			"name": "socialSecurityConfigurationId",
			"required": true,
			"description": "The unique identifier of the social security record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					],
					"operation": [
						"Delete Social Security Configuration By Social Security Configuration ID"
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
						"Social Security"
					],
					"operation": [
						"Delete Social Security Configuration By Social Security Configuration ID"
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
						"Social Security"
					],
					"operation": [
						"Delete Social Security Configuration By Social Security Configuration ID"
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
						"Social Security"
					],
					"operation": [
						"Delete Social Security Configuration By Social Security Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/socialsecurityconfigurations/{socialSecurityConfigurationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					],
					"operation": [
						"Get Social Security Configuration By Social Security Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Social Security Configuration ID",
			"name": "socialSecurityConfigurationId",
			"required": true,
			"description": "The unique identifier of the social security record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					],
					"operation": [
						"Get Social Security Configuration By Social Security Configuration ID"
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
						"Social Security"
					],
					"operation": [
						"Get Social Security Configuration By Social Security Configuration ID"
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
						"Social Security"
					],
					"operation": [
						"Get Social Security Configuration By Social Security Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/socialsecurityconfigurations/{socialSecurityConfigurationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					],
					"operation": [
						"Put Social Security Configuration By Social Security Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Social Security Configuration ID",
			"name": "socialSecurityConfigurationId",
			"required": true,
			"description": "The unique identifier of the social security record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					],
					"operation": [
						"Put Social Security Configuration By Social Security Configuration ID"
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
						"Social Security"
					],
					"operation": [
						"Put Social Security Configuration By Social Security Configuration ID"
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
						"Social Security"
					],
					"operation": [
						"Put Social Security Configuration By Social Security Configuration ID"
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
						"Social Security"
					],
					"operation": [
						"Put Social Security Configuration By Social Security Configuration ID"
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
						"Social Security"
					],
					"operation": [
						"Put Social Security Configuration By Social Security Configuration ID"
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
						"Social Security"
					],
					"operation": [
						"Put Social Security Configuration By Social Security Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Is Insured For Occupational Disability Insurance Act",
			"name": "isInsuredForOccupationalDisabilityInsuranceAct",
			"type": "boolean",
			"default": true,
			"description": "Will contributions for the Occupational Disability Insurance Act (WAO) be payed for this employment",
			"routing": {
				"send": {
					"property": "isInsuredForOccupationalDisabilityInsuranceAct",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					],
					"operation": [
						"Put Social Security Configuration By Social Security Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Is Insured For Sickness Benefits Act",
			"name": "isInsuredForSicknessBenefitsAct",
			"type": "boolean",
			"default": true,
			"description": "Will contributions for the  Sickness Benefits Act (ZW) be payed for this employment",
			"routing": {
				"send": {
					"property": "isInsuredForSicknessBenefitsAct",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					],
					"operation": [
						"Put Social Security Configuration By Social Security Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Is Insured For Unemployment Insurance Act",
			"name": "isInsuredForUnemploymentInsuranceAct",
			"type": "boolean",
			"default": true,
			"description": "Will contributions for the  Unemployment Insurance Act (WW) be payed for this employment",
			"routing": {
				"send": {
					"property": "isInsuredForUnemploymentInsuranceAct",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					],
					"operation": [
						"Put Social Security Configuration By Social Security Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The start date of the entity. Valide values are either the startDate of the employment or the firstday of a payrolling year.\n\nA (linked chain)[./#section/Data/Date-chains] is maintained within this resource.",
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
						"Social Security"
					],
					"operation": [
						"Put Social Security Configuration By Social Security Configuration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/socialsecurityconfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					],
					"operation": [
						"Get Social Security Configuration By Employment ID"
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
						"Social Security"
					],
					"operation": [
						"Get Social Security Configuration By Employment ID"
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
						"Social Security"
					],
					"operation": [
						"Get Social Security Configuration By Employment ID"
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
						"Social Security"
					],
					"operation": [
						"Get Social Security Configuration By Employment ID"
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
						"Social Security"
					],
					"operation": [
						"Get Social Security Configuration By Employment ID"
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
						"Social Security"
					],
					"operation": [
						"Get Social Security Configuration By Employment ID"
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
						"Social Security"
					],
					"operation": [
						"Get Social Security Configuration By Employment ID"
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
						"Social Security"
					],
					"operation": [
						"Get Social Security Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/socialsecurityconfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					],
					"operation": [
						"Post Social Security Configuration By Employment ID"
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
						"Social Security"
					],
					"operation": [
						"Post Social Security Configuration By Employment ID"
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
						"Social Security"
					],
					"operation": [
						"Post Social Security Configuration By Employment ID"
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
						"Social Security"
					],
					"operation": [
						"Post Social Security Configuration By Employment ID"
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
						"Social Security"
					],
					"operation": [
						"Post Social Security Configuration By Employment ID"
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
						"Social Security"
					],
					"operation": [
						"Post Social Security Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Is Insured For Occupational Disability Insurance Act",
			"name": "isInsuredForOccupationalDisabilityInsuranceAct",
			"type": "boolean",
			"default": true,
			"description": "Will contributions for the Occupational Disability Insurance Act (WAO) be payed for this employment",
			"routing": {
				"send": {
					"property": "isInsuredForOccupationalDisabilityInsuranceAct",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					],
					"operation": [
						"Post Social Security Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Is Insured For Sickness Benefits Act",
			"name": "isInsuredForSicknessBenefitsAct",
			"type": "boolean",
			"default": true,
			"description": "Will contributions for the  Sickness Benefits Act (ZW) be payed for this employment",
			"routing": {
				"send": {
					"property": "isInsuredForSicknessBenefitsAct",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					],
					"operation": [
						"Post Social Security Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Is Insured For Unemployment Insurance Act",
			"name": "isInsuredForUnemploymentInsuranceAct",
			"type": "boolean",
			"default": true,
			"description": "Will contributions for the  Unemployment Insurance Act (WW) be payed for this employment",
			"routing": {
				"send": {
					"property": "isInsuredForUnemploymentInsuranceAct",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Social Security"
					],
					"operation": [
						"Post Social Security Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The start date of the entity. Valide values are either the startDate of the employment or the firstday of a payrolling year.\n\nA (linked chain)[./#section/Data/Date-chains] is maintained within this resource.",
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
						"Social Security"
					],
					"operation": [
						"Post Social Security Configuration By Employment ID"
					]
				}
			}
		},
];
