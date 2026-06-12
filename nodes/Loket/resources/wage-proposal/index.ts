import type { INodeProperties } from 'n8n-workflow';

export const wageProposalDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Proposal"
					]
				}
			},
			"options": [
				{
					"name": "Patch Wage Proposals By Wage Proposal ID",
					"value": "Patch Wage Proposals By Wage Proposal ID",
					"action": "Accept or reject wage proposals",
					"description": "__Activity name :__ PatchWageProposalsByWageProposalId\n\nAccept or reject wage proposals\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/employees/employments/WageProposals"
						}
					}
				},
				{
					"name": "Get Wage Proposals By Employer ID",
					"value": "Get Wage Proposals By Employer ID",
					"action": "List of wage proposals for the employments of an employer",
					"description": "__Activity name :__ GetWageProposalsByEmployerId\n\nReturns a list of wage proposals for the employments of the employer.\nA wage proposal is created when an employment reaches the criteria set for the next tier of wage. \nE.G the minimum wage is linked to the age of a person so a wage proposal is created 60 days befor the birthday of an employment linked to the minimum wage and configured for wage proposals.\nVia this functionality the created wage proposal can be approved or rejected resulting in either a new wage record updated to reflect the correct wage or in case of a rejection the employment is disabled for wage proposals.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/employees/employments/WageProposals"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PATCH /providers/employers/employees/employments/WageProposals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Proposal"
					],
					"operation": [
						"Patch Wage Proposals By Wage Proposal ID"
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
						"Wage Proposal"
					],
					"operation": [
						"Patch Wage Proposals By Wage Proposal ID"
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
						"Wage Proposal"
					],
					"operation": [
						"Patch Wage Proposals By Wage Proposal ID"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": {
				"id": "b14acd0d-75d7-4fc8-8b22-4a3924585cab"
			},
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Proposal"
					],
					"operation": [
						"Patch Wage Proposals By Wage Proposal ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/employees/employments/WageProposals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage Proposal"
					],
					"operation": [
						"Get Wage Proposals By Employer ID"
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
						"Wage Proposal"
					],
					"operation": [
						"Get Wage Proposals By Employer ID"
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
						"Wage Proposal"
					],
					"operation": [
						"Get Wage Proposals By Employer ID"
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
						"Wage Proposal"
					],
					"operation": [
						"Get Wage Proposals By Employer ID"
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
						"Wage Proposal"
					],
					"operation": [
						"Get Wage Proposals By Employer ID"
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
						"Wage Proposal"
					],
					"operation": [
						"Get Wage Proposals By Employer ID"
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
						"Wage Proposal"
					],
					"operation": [
						"Get Wage Proposals By Employer ID"
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
						"Wage Proposal"
					],
					"operation": [
						"Get Wage Proposals By Employer ID"
					]
				}
			}
		},
];
