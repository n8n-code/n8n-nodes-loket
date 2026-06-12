import type { INodeProperties } from 'n8n-workflow';

export const employmentFundsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					]
				}
			},
			"options": [
				{
					"name": "Delete Employment Fund By Employment Fund ID",
					"value": "Delete Employment Fund By Employment Fund ID",
					"action": "Delete a specific employment fund record",
					"description": "__Activity name :__ DeleteEmploymentFundByEmploymentFundId\n\nDelete an existing employment fund record.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/employmentfunds/{{$parameter[\"employmentFundId\"]}}"
						}
					}
				},
				{
					"name": "Get Employment Fund By Employment Fund ID",
					"value": "Get Employment Fund By Employment Fund ID",
					"action": "Details of an employment fund",
					"description": "__Activity name :__ GetEmploymentFundByEmploymentFundId\n\nGet the details of an employment fund\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/employmentfunds/{{$parameter[\"employmentFundId\"]}}"
						}
					}
				},
				{
					"name": "Put Employment Fund By Employment Fund ID",
					"value": "Put Employment Fund By Employment Fund ID",
					"action": "Edit a employment fund record",
					"description": "__Activity name :__ PutEmploymentFundByEmploymentFundId\n\n__Metadata :__ Possible options for fields of the type \"metadata\" can be acquired (GET) by adding `/metadata` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/employmentfunds/{{$parameter[\"employmentFundId\"]}}"
						}
					}
				},
				{
					"name": "Get Employment Funds By Employment ID",
					"value": "Get Employment Funds By Employment ID",
					"action": "List of funds the employment partakes in",
					"description": "__Activity name :__ GetEmploymentFundsByEmploymentId\n\nGet a list of the funds the employment partakes in.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/employmentfunds"
						}
					}
				},
				{
					"name": "Post Employment Fund By Employment ID",
					"value": "Post Employment Fund By Employment ID",
					"action": "Activate a fund for an employment",
					"description": "__Activity name :__ PostEmploymentFundByEmploymentId\n\n__Metadata :__ Possible options for fields of the type \"metadata\" can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults\" to the POST URL.\n\nActivate a fund for an employment",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/employmentfunds"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/employmentfunds/{employmentFundId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					],
					"operation": [
						"Delete Employment Fund By Employment Fund ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Fund ID",
			"name": "employmentFundId",
			"required": true,
			"description": "The unique identifier of the employment fund",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					],
					"operation": [
						"Delete Employment Fund By Employment Fund ID"
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
						"Employment Funds"
					],
					"operation": [
						"Delete Employment Fund By Employment Fund ID"
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
						"Employment Funds"
					],
					"operation": [
						"Delete Employment Fund By Employment Fund ID"
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
						"Employment Funds"
					],
					"operation": [
						"Delete Employment Fund By Employment Fund ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/employmentfunds/{employmentFundId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					],
					"operation": [
						"Get Employment Fund By Employment Fund ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Fund ID",
			"name": "employmentFundId",
			"required": true,
			"description": "The unique identifier of the employment fund",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					],
					"operation": [
						"Get Employment Fund By Employment Fund ID"
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
						"Employment Funds"
					],
					"operation": [
						"Get Employment Fund By Employment Fund ID"
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
						"Employment Funds"
					],
					"operation": [
						"Get Employment Fund By Employment Fund ID"
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
						"Employment Funds"
					],
					"operation": [
						"Get Employment Fund By Employment Fund ID"
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
						"Employment Funds"
					],
					"operation": [
						"Get Employment Fund By Employment Fund ID"
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
						"Employment Funds"
					],
					"operation": [
						"Get Employment Fund By Employment Fund ID"
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
						"Employment Funds"
					],
					"operation": [
						"Get Employment Fund By Employment Fund ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/employmentfunds/{employmentFundId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					],
					"operation": [
						"Put Employment Fund By Employment Fund ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Fund ID",
			"name": "employmentFundId",
			"required": true,
			"description": "The unique identifier of the employment fund",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					],
					"operation": [
						"Put Employment Fund By Employment Fund ID"
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
						"Employment Funds"
					],
					"operation": [
						"Put Employment Fund By Employment Fund ID"
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
						"Employment Funds"
					],
					"operation": [
						"Put Employment Fund By Employment Fund ID"
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
						"Employment Funds"
					],
					"operation": [
						"Put Employment Fund By Employment Fund ID"
					]
				}
			}
		},
		{
			"displayName": "Deviations",
			"name": "deviations",
			"type": "json",
			"default": "{\n  \"employmentContributionPercentage\": 11,\n  \"totalContributionPercentage\": 12.0007\n}",
			"description": "Only set a value for the underlying fields if you want to deviate from the values as defined by the selected `fund`.\n\nDeviating is done on either all the fields or none.\n\n__Note:__ `deviations` and `fixedContribution` are mutually exclusive.",
			"routing": {
				"send": {
					"property": "deviations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					],
					"operation": [
						"Put Employment Fund By Employment Fund ID"
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
						"Employment Funds"
					],
					"operation": [
						"Put Employment Fund By Employment Fund ID"
					]
				}
			}
		},
		{
			"displayName": "Fixed Contribution",
			"name": "fixedContribution",
			"type": "json",
			"default": "{\n  \"employmentContribution\": 1789,\n  \"totalContribution\": 2569\n}",
			"description": "With the underlying elements fixed values (money) can be set as the result of the Fund calculation.  In doing so the actual calculation for the `fund` will no longer take place as the outcome is fixed. This has the side effect that the \"grondslag\" is no longer calculated.  In the data exchange with certain parties the \"grondslag\" has to be communicated allongside the contribution.  In those cases do not use this option as the calculation is disabled.\n\nSetting a fixed contribution is done on either all the fields or none.\n\n__Note:__ `deviations` and `fixedContribution` are mutually exclusive.",
			"routing": {
				"send": {
					"property": "fixedContribution",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					],
					"operation": [
						"Put Employment Fund By Employment Fund ID"
					]
				}
			}
		},
		{
			"displayName": "Fund",
			"name": "fund",
			"type": "json",
			"default": "{\n  \"description\": \"Ouderdomspensioen\",\n  \"key\": 1\n}",
			"routing": {
				"send": {
					"property": "fund",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					],
					"operation": [
						"Put Employment Fund By Employment Fund ID"
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
						"Employment Funds"
					],
					"operation": [
						"Put Employment Fund By Employment Fund ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this fund starts.\n\nA (linked chain)[./#section/Data/Date-chains] per fund is maintained within this resource. So multiple funds can be active at the same time but one specific fund can never be active multiple times at the same time.",
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
						"Employment Funds"
					],
					"operation": [
						"Put Employment Fund By Employment Fund ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/employmentfunds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					],
					"operation": [
						"Get Employment Funds By Employment ID"
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
						"Employment Funds"
					],
					"operation": [
						"Get Employment Funds By Employment ID"
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
						"Employment Funds"
					],
					"operation": [
						"Get Employment Funds By Employment ID"
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
						"Employment Funds"
					],
					"operation": [
						"Get Employment Funds By Employment ID"
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
						"Employment Funds"
					],
					"operation": [
						"Get Employment Funds By Employment ID"
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
						"Employment Funds"
					],
					"operation": [
						"Get Employment Funds By Employment ID"
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
						"Employment Funds"
					],
					"operation": [
						"Get Employment Funds By Employment ID"
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
						"Employment Funds"
					],
					"operation": [
						"Get Employment Funds By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/employmentfunds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					],
					"operation": [
						"Post Employment Fund By Employment ID"
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
						"Employment Funds"
					],
					"operation": [
						"Post Employment Fund By Employment ID"
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
						"Employment Funds"
					],
					"operation": [
						"Post Employment Fund By Employment ID"
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
						"Employment Funds"
					],
					"operation": [
						"Post Employment Fund By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviations",
			"name": "deviations",
			"type": "json",
			"default": "{\n  \"employmentContributionPercentage\": 11,\n  \"totalContributionPercentage\": 12.0007\n}",
			"description": "Only set a value for the underlying fields if you want to deviate from the values as defined by the selected `fund`.\n\nDeviating is done on either all the fields or none.\n\n__Note:__ `deviations` and `fixedContribution` are mutually exclusive.",
			"routing": {
				"send": {
					"property": "deviations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					],
					"operation": [
						"Post Employment Fund By Employment ID"
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
						"Employment Funds"
					],
					"operation": [
						"Post Employment Fund By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Fixed Contribution",
			"name": "fixedContribution",
			"type": "json",
			"default": "{\n  \"employmentContribution\": 1789,\n  \"totalContribution\": 2569\n}",
			"description": "With the underlying elements fixed values (money) can be set as the result of the Fund calculation.  In doing so the actual calculation for the `fund` will no longer take place as the outcome is fixed. This has the side effect that the \"grondslag\" is no longer calculated.  In the data exchange with certain parties the \"grondslag\" has to be communicated allongside the contribution.  In those cases do not use this option as the calculation is disabled.\n\nSetting a fixed contribution is done on either all the fields or none.\n\n__Note:__ `deviations` and `fixedContribution` are mutually exclusive.",
			"routing": {
				"send": {
					"property": "fixedContribution",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					],
					"operation": [
						"Post Employment Fund By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Fund",
			"name": "fund",
			"type": "json",
			"default": "{\n  \"description\": \"Ouderdomspensioen\",\n  \"key\": 1\n}",
			"routing": {
				"send": {
					"property": "fund",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Funds"
					],
					"operation": [
						"Post Employment Fund By Employment ID"
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
						"Employment Funds"
					],
					"operation": [
						"Post Employment Fund By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this fund starts.\n\nA (linked chain)[./#section/Data/Date-chains] per fund is maintained within this resource. So multiple funds can be active at the same time but one specific fund can never be active multiple times at the same time.",
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
						"Employment Funds"
					],
					"operation": [
						"Post Employment Fund By Employment ID"
					]
				}
			}
		},
];
