import type { INodeProperties } from 'n8n-workflow';

export const wageProjectionDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					]
				}
			},
			"options": [
				{
					"name": "Post Wage Projection By Employment ID",
					"value": "Post Wage Projection By Employment ID",
					"action": "Perform a wage projection",
					"description": "__Activity name :__ PostWageProjectionByEmploymentId\n\nThis endpoint can only be used for employments that are already known in the loket.nl system.\n\n__Metadata :__  No metadata endpoint available for this controller endpoint.\n\n__Defaults :__ No defaults endpoint available for this controller endpoint.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/wageprojection"
						}
					}
				},
				{
					"name": "Post Wageprojection Based On Default Cla Configuration By Employment ID",
					"value": "Post Wageprojection Based On Default Cla Configuration By Employment ID",
					"action": "Perform a wage projection based on a default CLA configuration",
					"description": "__Activity name :__ PostWageprojectionBasedOnDefaultClaConfigurationByEmploymentId\n\nThis endpoint can be used to calculate a wage projection based on a default collective labor agreement (CLA) configuration.  The input fields allow for certain customizations.\n\n__Metadata :__  No metadata endpoint available for this controller endpoint.\n\n__Defaults :__ No defaults endpoint available for this controller endpoint.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/wageprojection/basedOnDefaultClaConfiguration"
						}
					}
				},
				{
					"name": "Get Cla Data For Wage Projection By Collective Labor Agreement ID",
					"value": "Get Cla Data For Wage Projection By Collective Labor Agreement ID",
					"action": "Wage projection Collective labor agreements defaults",
					"description": "__Activity name :__ GetClaDataForWageProjectionByCollectiveLaborAgreementId\n\nGet de configuration of a specific Collective labor agreement. This configuration (data) can then be used (as input) to perform a wage calculation or wage projection with.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/wageprojection/cladata/{{$parameter[\"collectiveLaborAgreementId\"]}}"
						}
					}
				},
				{
					"name": "Get Collective Labor Agreements By User ID",
					"value": "Get Collective Labor Agreements By User ID",
					"action": "List of collective labor agreements (CLA)",
					"description": "__Activity name :__ GetCollectiveLaborAgreementsByUserId\n\nGet a list of all collective labor agreements (CLA) accessible to the current user\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/wageprojection/collectivelaboragreements"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/wageprojection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Post Wage Projection By Employment ID"
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
						"Wage Projection"
					],
					"operation": [
						"Post Wage Projection By Employment ID"
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
						"Wage Projection"
					],
					"operation": [
						"Post Wage Projection By Employment ID"
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
						"Wage Projection"
					],
					"operation": [
						"Post Wage Projection By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Calculate Using Next Years Values",
			"name": "calculateUsingNextYearsValues",
			"type": "boolean",
			"default": true,
			"description": "If set to true the wage projection will use the (government) salary values of the next payroll year to calculate the wages. This gives some insight in what the employments wages will do next year based on the government's tax plans.\"",
			"routing": {
				"send": {
					"property": "calculateUsingNextYearsValues",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Post Wage Projection By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviations",
			"name": "deviations",
			"type": "json",
			"default": "{\n  \"hoursPerWeek\": 37.5,\n  \"percentageChange\": 25,\n  \"startDate\": \"1995-05-21\"\n}",
			"description": "This endpoint can only be used for employments that are already known in the loket.nl system. If however you want to perform a calculation with different parameters then that are known in the loket system they can be set here",
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
						"Wage Projection"
					],
					"operation": [
						"Post Wage Projection By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/wageprojection/basedOnDefaultClaConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
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
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
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
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
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
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Additional Payroll Period",
			"name": "additionalPayrollPeriod",
			"type": "json",
			"default": "{\n  \"percentage\": 8,\n  \"resultPayrollComponent\": {\n    \"key\": 83\n  }\n}",
			"routing": {
				"send": {
					"property": "additionalPayrollPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Apply Payroll Tax Deduction",
			"name": "applyPayrollTaxDeduction",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether payroll tax deduction is to be applied (loonheffingskorting)",
			"routing": {
				"send": {
					"property": "applyPayrollTaxDeduction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Calculate Using Next Years Values",
			"name": "calculateUsingNextYearsValues",
			"type": "boolean",
			"default": true,
			"description": "If set to true the wage projection will use the (government) salary values of the next payroll year to calculate the wages. This gives some insight in what the employments wages will do next year based on the government's tax plans.\"",
			"routing": {
				"send": {
					"property": "calculateUsingNextYearsValues",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Company Car",
			"name": "companyCar",
			"type": "json",
			"default": "{\n  \"fiscalAddition\": 345.87\n}",
			"routing": {
				"send": {
					"property": "companyCar",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
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
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deductions",
			"name": "deductions",
			"type": "json",
			"default": "{\n  \"gross\": 50.87,\n  \"net\": 50.87\n}",
			"routing": {
				"send": {
					"property": "deductions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviations",
			"name": "deviations",
			"type": "json",
			"default": "{\n  \"grossWagePercentageChange\": 25,\n  \"hoursPerWeek\": 37.5\n}",
			"description": "Deviations allow the user to calculate the difference between the current wage and the wage after certain deviations.\nIf no deviations are required set the object to NULL",
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
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Gross Wage",
			"name": "grossWage",
			"type": "number",
			"default": 3500,
			"description": "The grosswage per payroll period",
			"routing": {
				"send": {
					"property": "grossWage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Holiday Allowance",
			"name": "holidayAllowance",
			"type": "json",
			"default": "{\n  \"percentage\": 8,\n  \"resultPayrollComponent\": {\n    \"key\": 82\n  }\n}",
			"routing": {
				"send": {
					"property": "holidayAllowance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Hours Per Week",
			"name": "hoursPerWeek",
			"type": "number",
			"default": 24.5,
			"description": "The hours per week te be used in the wage calculation. \n\nPlease note that currently this endpoint will always calculate as if the hours provided are full time hours.",
			"routing": {
				"send": {
					"property": "hoursPerWeek",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payments",
			"name": "payments",
			"type": "json",
			"default": "{\n  \"gross\": 50.87,\n  \"net\": 50.87\n}",
			"routing": {
				"send": {
					"property": "payments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Post Wageprojection Based On Default Cla Configuration By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /wageprojection/cladata/{collectiveLaborAgreementId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Get Cla Data For Wage Projection By Collective Labor Agreement ID"
					]
				}
			}
		},
		{
			"displayName": "Collective Labor Agreement ID",
			"name": "collectiveLaborAgreementId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Get Cla Data For Wage Projection By Collective Labor Agreement ID"
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
						"Wage Projection"
					],
					"operation": [
						"Get Cla Data For Wage Projection By Collective Labor Agreement ID"
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
						"Wage Projection"
					],
					"operation": [
						"Get Cla Data For Wage Projection By Collective Labor Agreement ID"
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
						"Wage Projection"
					],
					"operation": [
						"Get Cla Data For Wage Projection By Collective Labor Agreement ID"
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
						"Wage Projection"
					],
					"operation": [
						"Get Cla Data For Wage Projection By Collective Labor Agreement ID"
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
						"Wage Projection"
					],
					"operation": [
						"Get Cla Data For Wage Projection By Collective Labor Agreement ID"
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
						"Wage Projection"
					],
					"operation": [
						"Get Cla Data For Wage Projection By Collective Labor Agreement ID"
					]
				}
			}
		},
		{
			"displayName": "GET /wageprojection/collectivelaboragreements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Projection"
					],
					"operation": [
						"Get Collective Labor Agreements By User ID"
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
						"Wage Projection"
					],
					"operation": [
						"Get Collective Labor Agreements By User ID"
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
						"Wage Projection"
					],
					"operation": [
						"Get Collective Labor Agreements By User ID"
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
						"Wage Projection"
					],
					"operation": [
						"Get Collective Labor Agreements By User ID"
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
						"Wage Projection"
					],
					"operation": [
						"Get Collective Labor Agreements By User ID"
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
						"Wage Projection"
					],
					"operation": [
						"Get Collective Labor Agreements By User ID"
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
						"Wage Projection"
					],
					"operation": [
						"Get Collective Labor Agreements By User ID"
					]
				}
			}
		},
];
