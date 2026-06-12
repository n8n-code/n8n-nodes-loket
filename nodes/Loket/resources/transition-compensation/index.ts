import type { INodeProperties } from 'n8n-workflow';

export const transitionCompensationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Transition Compensation"
					]
				}
			},
			"options": [
				{
					"name": "Post Calculate Transition Compensation By Employment ID",
					"value": "Post Calculate Transition Compensation By Employment ID",
					"action": "Calculate transition compensation",
					"description": "This is a controller endpoint to perform a calculation. No actual data will be stored as a result of these actions.\n\n__Activity name :__ PostCalculateTransitionCompensationByEmploymentId\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults` to the POST URL. This will only include the default values for the input parameter fields (the actual calculation of the transition compensation is not part of that)\n\nA calculation help for determining the transition compensation amount. (rekenhulp transitievergoeding)\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/transitioncompensation/calculate"
						}
					}
				},
				{
					"name": "Get Calculate Transition Compensation Defaults By Employment ID",
					"value": "Get Calculate Transition Compensation Defaults By Employment ID",
					"action": "Get default input parameters transition compensation",
					"description": "__Activity name :__ GetCalculateTransitionCompensationDefaultsByEmploymentId\n\n\n Get the default values of the input parameters for the POST action.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/transitioncompensation/calculate/defaults"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/transitioncompensation/calculate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transition Compensation"
					],
					"operation": [
						"Post Calculate Transition Compensation By Employment ID"
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
						"Transition Compensation"
					],
					"operation": [
						"Post Calculate Transition Compensation By Employment ID"
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
						"Transition Compensation"
					],
					"operation": [
						"Post Calculate Transition Compensation By Employment ID"
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
						"Transition Compensation"
					],
					"operation": [
						"Post Calculate Transition Compensation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Base Calculations Bonus Percentage",
			"name": "baseCalculationsBonusPercentage",
			"type": "number",
			"default": 12,
			"description": "The bonus percentage used in wage calculations based on an accumulation of given base calculations (grondslagen)\n",
			"routing": {
				"send": {
					"property": "baseCalculationsBonusPercentage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transition Compensation"
					],
					"operation": [
						"Post Calculate Transition Compensation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The date on which the employment ends.",
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
						"Transition Compensation"
					],
					"operation": [
						"Post Calculate Transition Compensation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Gross Monthly Supplement",
			"name": "grossMonthlySupplement",
			"type": "number",
			"default": 212,
			"description": "An additional monthly amount, if applicable.\n",
			"routing": {
				"send": {
					"property": "grossMonthlySupplement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transition Compensation"
					],
					"operation": [
						"Post Calculate Transition Compensation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Gross Monthly Wage",
			"name": "grossMonthlyWage",
			"type": "number",
			"default": 2300,
			"description": "Gross wage/ basic wage for the employment per month.\n",
			"routing": {
				"send": {
					"property": "grossMonthlyWage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transition Compensation"
					],
					"operation": [
						"Post Calculate Transition Compensation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Shift Bonus Percentage",
			"name": "shiftBonusPercentage",
			"type": "number",
			"default": 12,
			"description": "The bonus percentage used in wage calculations based on given shift.\n",
			"routing": {
				"send": {
					"property": "shiftBonusPercentage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transition Compensation"
					],
					"operation": [
						"Post Calculate Transition Compensation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this employment starts.",
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
						"Transition Compensation"
					],
					"operation": [
						"Post Calculate Transition Compensation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/transitioncompensation/calculate/defaults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transition Compensation"
					],
					"operation": [
						"Get Calculate Transition Compensation Defaults By Employment ID"
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
						"Transition Compensation"
					],
					"operation": [
						"Get Calculate Transition Compensation Defaults By Employment ID"
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
						"Transition Compensation"
					],
					"operation": [
						"Get Calculate Transition Compensation Defaults By Employment ID"
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
						"Transition Compensation"
					],
					"operation": [
						"Get Calculate Transition Compensation Defaults By Employment ID"
					]
				}
			}
		},
];
