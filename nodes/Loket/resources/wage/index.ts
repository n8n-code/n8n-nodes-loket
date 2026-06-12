import type { INodeProperties } from 'n8n-workflow';

export const wageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					]
				}
			},
			"options": [
				{
					"name": "Delete Wage By Wage ID",
					"value": "Delete Wage By Wage ID",
					"action": "Delete a specific wage record",
					"description": "__Activity name :__ DeleteWageByWageId\n\nDelete a wage record for the employment\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/wages/{{$parameter[\"wageId\"]}}"
						}
					}
				},
				{
					"name": "Get Wage By Wage ID",
					"value": "Get Wage By Wage ID",
					"action": "Details of a single wage",
					"description": "__Activity name :__ GetWageByWageId\n\nGet the details of a single wage\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/wages/{{$parameter[\"wageId\"]}}"
						}
					}
				},
				{
					"name": "Put Wage By Wage ID",
					"value": "Put Wage By Wage ID",
					"action": "Edit a wage",
					"description": "__Activity name :__ PutWageByWageId\n\nEdit the details of a wage \n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT wage URL.\n\n        \nThe possible options for `payGrade` are scoped by a `payScale`. To obtain the pay grades for a pay scale a metadata call has to be performed with the following format `../wages/metadata/payscale/{key}`. Where {key} is the key of the `payScale` (obtained via the first metadata call) for which the pay grades are to be returned.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/wages/{{$parameter[\"wageId\"]}}"
						}
					}
				},
				{
					"name": "Get Wages By Employment ID",
					"value": "Get Wages By Employment ID",
					"action": "List of wages for an employment",
					"description": "__Activity name :__ GetWagesByEmploymentId\n\nGet the list of wages for the employment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/wages"
						}
					}
				},
				{
					"name": "Post Wage By Employment ID",
					"value": "Post Wage By Employment ID",
					"action": "Create an wage for an employment",
					"description": "__Activity name :__ PostWageByEmploymentId\n\nCreate a new wage record for the given employment\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST Wage URL.\n\n        \nThe possible options for `payGrade` are scoped by a `payScale`. To obtain the pay grades for a pay scale a metadata call has to be performed with the following format `../wages/metadata/payscale/{key}`. Where {key} is the key of the `payScale` (obtained via the first metadata call) for which the pay grades are to be returned.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL and performing a GET action.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/wages"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/wages/{wageId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Delete Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Wage ID",
			"name": "wageId",
			"required": true,
			"description": "The unique identifier of a wage",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Delete Wage By Wage ID"
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
						"Wage"
					],
					"operation": [
						"Delete Wage By Wage ID"
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
						"Wage"
					],
					"operation": [
						"Delete Wage By Wage ID"
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
						"Wage"
					],
					"operation": [
						"Delete Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/wages/{wageId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Get Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Wage ID",
			"name": "wageId",
			"required": true,
			"description": "The unique identifier of a wage",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Get Wage By Wage ID"
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
						"Wage"
					],
					"operation": [
						"Get Wage By Wage ID"
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
						"Wage"
					],
					"operation": [
						"Get Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/wages/{wageId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Wage ID",
			"name": "wageId",
			"required": true,
			"description": "The unique identifier of a wage",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
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
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
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
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
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
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Apply Pay Grade",
			"name": "applyPayGrade",
			"type": "boolean",
			"default": true,
			"description": "Apply pay grade indicates that after submitting the record the server will replace the value of `grossWage` with the value represented by the selected `payGrade`. A pay grade contains time based values, the value that is active on the `start date` of the record will be selected.\n",
			"routing": {
				"send": {
					"property": "applyPayGrade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Employer Costs",
			"name": "employerCosts",
			"type": "number",
			"default": 3500,
			"description": "The cost for the employer for this employee.\n",
			"routing": {
				"send": {
					"property": "employerCosts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Employer Costs Type",
			"name": "employerCostsType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"hourly\"\n}",
			"description": "Indicates whether the employer costs are hourly costs or periodic costs. Periodic can represent a week, four weeks or a month. Which period is active for the employment can be found in the payroll administration resource.\n",
			"routing": {
				"send": {
					"property": "employerCostsType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "",
			"description": "The end date for the information in the record.\n",
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
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Gross Wage",
			"name": "grossWage",
			"type": "number",
			"default": 2300,
			"description": "The gross wage for the employee\n",
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
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Gross Wage Type",
			"name": "grossWageType",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"hourly\"\n}",
			"description": "Indicates whether the `grossWage` is an hourly wage or a Periodic wage. Periodic can represent a week, four weeks or a month. Which period is active for the employment can be found in wagePeriodType.\n",
			"routing": {
				"send": {
					"property": "grossWageType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
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
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Is Gross Wage Full Time",
			"name": "isGrossWageFullTime",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the given grossWage is either a full-time wage or a part-time wage. Full-time wage is the default value (isGrossWageFulltime = true) and Loket.nl recommends to use this option. A full-time wage takes into account the part-time percentage of an employment. While a part-time wage does not. E.g. A full-time wage of 2400 euro’s is registered. The employments works 20 out of 40 hours (40 fours is a full-time shift) thus having a 20/40 = 50% part-time percentage. The part-time hours (deviatingHoursPerWeek) are accessible through the endpoint for working hours of an employement. In the wage calculation Loket.nl will divide the grossWage component by 50% resulting in a grossWage of 1200 euro’s. In the case of a part-time wage the part-time percentage will be ignored.\n",
			"routing": {
				"send": {
					"property": "isGrossWageFullTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Net Wage",
			"name": "netWage",
			"type": "number",
			"default": 2400,
			"description": "Net wage for the employment\n",
			"routing": {
				"send": {
					"property": "netWage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Net Wage Type",
			"name": "netWageType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"hourly\"\n}",
			"description": "Indicates whether the net wage is an hourly wage or a periodic wage. Periodic can represent a week, four weeks or a month. Which period is active for the employment can be found in the payroll administration resource.\n",
			"routing": {
				"send": {
					"property": "netWageType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Pay Grade",
			"name": "payGrade",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Schaal B1, 15 jaar\"\n}",
			"description": "The pay grade indicates on what level (cel) of the paygrade the employment is.  The level is multi dimensional where the description indicates both the level and for example the number of years of service within the given level. \n\n`payGrade` is a metadata field within the payroll administration/payScale context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "payGrade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Pay Scale",
			"name": "payScale",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Glastuinbouw maand, Loongebouw A\"\n}",
			"description": "A pay scale (also known as a salary structure) is a system that determines how much an employee is to be paid as a wage or salary, based on one or more factors such as the employee's level, rank or status within the employer's organization, the length of time that the employee has been employed, and the difficulty of the specific work performed.  After selecting a pay scale a pay grade needs to be selected to determine the actual wage. Only works with `grossWage`. The value of `grossWage` will be updated server side after the submit.\n\n`payScale` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "payScale",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period Type",
			"name": "payrollPeriodType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Maand\"\n}",
			"description": "Indicates the frequence of the payrolling process. Payrolling can be done on a montly (key 1), 4-weekly (key 3) or weekly basis (key 4). The value of this field is used to further specify the meaning of grossWageType, netWageType and employerCostsType. When the key fields of these three wage types have a value 1 (meaning periodic wage), the payrollPeriodType field shows the period type (month, 4 weeks or week) applicable to the wages for the employment. E.g. If the value for grossWageType.key = 1 (periodic wage) and the value for payrollPeriodType.key = 1 (meaning Month), then the wage registerd in grossWage is a monthly wage. Note that in cases where the wage type is an hourly wage (grossWageType.key = 2), the payrollPeriodType should be ignored.\n",
			"routing": {
				"send": {
					"property": "payrollPeriodType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "1995-05-21",
			"description": "The start date for the information in the record.\n\nA (linked chain)[./#section/Data/Date-chains] is maintained within this resource.\n__Note__ It is posible to have no wage record.\n",
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
						"Wage"
					],
					"operation": [
						"Put Wage By Wage ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/wages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Get Wages By Employment ID"
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
						"Wage"
					],
					"operation": [
						"Get Wages By Employment ID"
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
						"Wage"
					],
					"operation": [
						"Get Wages By Employment ID"
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
						"Wage"
					],
					"operation": [
						"Get Wages By Employment ID"
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
						"Wage"
					],
					"operation": [
						"Get Wages By Employment ID"
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
						"Wage"
					],
					"operation": [
						"Get Wages By Employment ID"
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
						"Wage"
					],
					"operation": [
						"Get Wages By Employment ID"
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
						"Wage"
					],
					"operation": [
						"Get Wages By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/wages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
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
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
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
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
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
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Apply Pay Grade",
			"name": "applyPayGrade",
			"type": "boolean",
			"default": true,
			"description": "Apply pay grade indicates that after submitting the record the server will replace the value of `grossWage` with the value represented by the selected `payGrade`. A pay grade contains time based values, the value that is active on the `start date` of the record will be selected.\n",
			"routing": {
				"send": {
					"property": "applyPayGrade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employer Costs",
			"name": "employerCosts",
			"type": "number",
			"default": 3500,
			"description": "The cost for the employer for this employee.\n",
			"routing": {
				"send": {
					"property": "employerCosts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employer Costs Type",
			"name": "employerCostsType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"hourly\"\n}",
			"description": "Indicates whether the employer costs are hourly costs or periodic costs. Periodic can represent a week, four weeks or a month. Which period is active for the employment can be found in the payroll administration resource.\n",
			"routing": {
				"send": {
					"property": "employerCostsType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "",
			"description": "The end date for the information in the record.\n",
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
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Gross Wage",
			"name": "grossWage",
			"type": "number",
			"default": 2300,
			"description": "The gross wage for the employee\n",
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
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Gross Wage Type",
			"name": "grossWageType",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"hourly\"\n}",
			"description": "Indicates whether the `grossWage` is an hourly wage or a Periodic wage. Periodic can represent a week, four weeks or a month. Which period is active for the employment can be found in wagePeriodType.\n",
			"routing": {
				"send": {
					"property": "grossWageType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
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
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Is Gross Wage Full Time",
			"name": "isGrossWageFullTime",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the given grossWage is either a full-time wage or a part-time wage. Full-time wage is the default value (isGrossWageFulltime = true) and Loket.nl recommends to use this option. A full-time wage takes into account the part-time percentage of an employment. While a part-time wage does not. E.g. A full-time wage of 2400 euro’s is registered. The employments works 20 out of 40 hours (40 fours is a full-time shift) thus having a 20/40 = 50% part-time percentage. The part-time hours (deviatingHoursPerWeek) are accessible through the endpoint for working hours of an employement. In the wage calculation Loket.nl will divide the grossWage component by 50% resulting in a grossWage of 1200 euro’s. In the case of a part-time wage the part-time percentage will be ignored.\n",
			"routing": {
				"send": {
					"property": "isGrossWageFullTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Net Wage",
			"name": "netWage",
			"type": "number",
			"default": 2400,
			"description": "Net wage for the employment\n",
			"routing": {
				"send": {
					"property": "netWage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Net Wage Type",
			"name": "netWageType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"hourly\"\n}",
			"description": "Indicates whether the net wage is an hourly wage or a periodic wage. Periodic can represent a week, four weeks or a month. Which period is active for the employment can be found in the payroll administration resource.\n",
			"routing": {
				"send": {
					"property": "netWageType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Pay Grade",
			"name": "payGrade",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Schaal B1, 15 jaar\"\n}",
			"description": "The pay grade indicates on what level (cel) of the paygrade the employment is.  The level is multi dimensional where the description indicates both the level and for example the number of years of service within the given level. \n\n`payGrade` is a metadata field within the payroll administration/payScale context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "payGrade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Pay Scale",
			"name": "payScale",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Glastuinbouw maand, Loongebouw A\"\n}",
			"description": "A pay scale (also known as a salary structure) is a system that determines how much an employee is to be paid as a wage or salary, based on one or more factors such as the employee's level, rank or status within the employer's organization, the length of time that the employee has been employed, and the difficulty of the specific work performed.  After selecting a pay scale a pay grade needs to be selected to determine the actual wage. Only works with `grossWage`. The value of `grossWage` will be updated server side after the submit.\n\n`payScale` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "payScale",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period Type",
			"name": "payrollPeriodType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Maand\"\n}",
			"description": "Indicates the frequence of the payrolling process. Payrolling can be done on a montly (key 1), 4-weekly (key 3) or weekly basis (key 4). The value of this field is used to further specify the meaning of grossWageType, netWageType and employerCostsType. When the key fields of these three wage types have a value 1 (meaning periodic wage), the payrollPeriodType field shows the period type (month, 4 weeks or week) applicable to the wages for the employment. E.g. If the value for grossWageType.key = 1 (periodic wage) and the value for payrollPeriodType.key = 1 (meaning Month), then the wage registerd in grossWage is a monthly wage. Note that in cases where the wage type is an hourly wage (grossWageType.key = 2), the payrollPeriodType should be ignored.\n",
			"routing": {
				"send": {
					"property": "payrollPeriodType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "1995-05-21",
			"description": "The start date for the information in the record.\n\nA (linked chain)[./#section/Data/Date-chains] is maintained within this resource.\n__Note__ It is posible to have no wage record.\n",
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
						"Wage"
					],
					"operation": [
						"Post Wage By Employment ID"
					]
				}
			}
		},
];
