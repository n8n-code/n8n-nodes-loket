import type { INodeProperties } from 'n8n-workflow';

export const qwoaterDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Qwoater"
					]
				}
			},
			"options": [
				{
					"name": "Get Qwoater Employers By User",
					"value": "Get Qwoater Employers By User",
					"action": "List of employers using Qwoater",
					"description": "__Activity name :__ GetQwoaterEmployersByUser\n\nReturns a list of employerIds that have at least one Qwoater product enabled with the corresponding providerId and lastModifiedVersionNumber for the employer.\n\n**What does the 'last modified' version number reflect**\n\nThe sequence number of an employer is a sequential number that reflects whether any changes have occurred in any of its UNDERLYING employments.\n\nMore precisely, it reflects the sequence number after the latest change of any database record that relates to an employment within this employer.   What we consider to be 'underlying' employment data is based on a predefined set of tables, and of course given id.  This predefined set of tables can be found [here](../TablesLastModifiedVersionNumber.xlsx)\n\nThe scope of this predefined set is to represent 'static' employment data (vaste gegevens), and thus excludes payroll period data (variabele gegevens).\n\n**When to use**\n\nThis endpoint is most useful for integrations that regularly synchronize Loket employment data with another system.  As there are no webhooks available, in practice these integrations would need to regularly poll all data to see whether there any changes in the employment data.  The most elementary approach of getting all employment data every time you sync acquires a LOT of calls, in some cases even millions per day.  Even though we can handle quite a lot, this is not always the desired way for both client and server. Hence, this endpoint enables an alternative solution to set up such an integration.\n\n**How to use**\n\nWith every update (including additions and deletions) the version number will increase. I.e. the version number will NEVER decrease over time.  (Please note this is not only true within the context of a single employer (or any other entity) but applies to all changes in the database).\nConsequently, in practice one would use this endpoint to check if any empLoyer version numbers have increased by applying the filter query parameter to the version field, for example `?filter=lastModifiedVersionNumber gt 70429274`.\n\n*Recommended usage*\n\n* Perform your regular synchronization of static employment data\n* Store the highest version number, for which you have now processed all changes. (You may use the following parameter to do this `?orderBy=-lastModifiedVersionNumber` )\n* Next time you want to perform synchronization. Call this endpoint with parameter `?filter=lastModifiedVersionNumber gt {{YourVersionNumber}}`\n* Only get employment information for employers that are included in that filtered list. (exclude all other employers as you already know there have been no changes since the last synchronization)\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/qwoater/employers"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /qwoater/employers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Qwoater"
					],
					"operation": [
						"Get Qwoater Employers By User"
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
						"Qwoater"
					],
					"operation": [
						"Get Qwoater Employers By User"
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
						"Qwoater"
					],
					"operation": [
						"Get Qwoater Employers By User"
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
						"Qwoater"
					],
					"operation": [
						"Get Qwoater Employers By User"
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
						"Qwoater"
					],
					"operation": [
						"Get Qwoater Employers By User"
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
						"Qwoater"
					],
					"operation": [
						"Get Qwoater Employers By User"
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
						"Qwoater"
					],
					"operation": [
						"Get Qwoater Employers By User"
					]
				}
			}
		},
];
