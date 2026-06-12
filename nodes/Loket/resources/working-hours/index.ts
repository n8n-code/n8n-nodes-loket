import type { INodeProperties } from 'n8n-workflow';

export const workingHoursDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					]
				}
			},
			"options": [
				{
					"name": "Delete Working Hours By Working Hours ID",
					"value": "Delete Working Hours By Working Hours ID",
					"action": "Delete a specific working hours record",
					"description": "__Activity name :__ DeleteWorkingHoursByWorkingHoursId <br/> <br/>        Delete an existing working hours record (for an employment)\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/workinghours/{{$parameter[\"workinghoursId\"]}}"
						}
					}
				},
				{
					"name": "Get Working Hours By Working Hours ID",
					"value": "Get Working Hours By Working Hours ID",
					"action": "Details of the working hours",
					"description": "__Activity name :__  GetWorkingHoursByWorkingHoursId <br/> <br/>  Get the details of a working hours record\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/workinghours/{{$parameter[\"workinghoursId\"]}}"
						}
					}
				},
				{
					"name": "Put Working Hours By Working Hours ID",
					"value": "Put Working Hours By Working Hours ID",
					"action": "Edit the working hours",
					"description": "__Activity name :__  PutWorkingHoursByWorkingHoursId       <br/> <br/>  Create a new working hours record for an employment<br/>  Please note that so-called chain validation exists for working hours records. In other words, the time periods of records for an employment cannot overlap with each other.<br/> A new or changed startDate affects the endDate of its preceding record.<br/>  When PUT-ing a new record, the startDate must be greater then the preceding record's startDate.\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/workinghours/{{$parameter[\"workinghoursId\"]}}"
						}
					}
				},
				{
					"name": "Get Working Hours By Employment ID",
					"value": "Get Working Hours By Employment ID",
					"action": "List of working hours for an employment",
					"description": "__Activity name :__  GetWorkingHoursByEmploymentId  <br/> <br/>  Get the list of working hours for an employment <br/>\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/workinghours"
						}
					}
				},
				{
					"name": "Post Working Hours By Employment ID",
					"value": "Post Working Hours By Employment ID",
					"action": "Create the working hours for an employment",
					"description": "__Activity name :__  PostWorkingHoursByEmploymentId <br/> <br/>  Create a new working hours record for an employment<br/>  Please note that so-called chain validation exists for working hours records. In other words, the time periods of records for an employment cannot overlap with each other.<br/> A new or changed startDate affects the endDate of its preceding record.<br/>  When POST-ing a new record, the startDate must be greater then the preceding record's startDate.\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/workinghours"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/workinghours/{workinghoursId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Delete Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Workinghours ID",
			"name": "workinghoursId",
			"required": true,
			"description": "The unique identifier of the work detail",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Delete Working Hours By Working Hours ID"
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
						"Working Hours"
					],
					"operation": [
						"Delete Working Hours By Working Hours ID"
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
						"Working Hours"
					],
					"operation": [
						"Delete Working Hours By Working Hours ID"
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
						"Working Hours"
					],
					"operation": [
						"Delete Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/workinghours/{workinghoursId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Get Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Workinghours ID",
			"name": "workinghoursId",
			"required": true,
			"description": "The unique identifier of the work detail",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Get Working Hours By Working Hours ID"
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
						"Working Hours"
					],
					"operation": [
						"Get Working Hours By Working Hours ID"
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
						"Working Hours"
					],
					"operation": [
						"Get Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/workinghours/{workinghoursId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Workinghours ID",
			"name": "workinghoursId",
			"required": true,
			"description": "The unique identifier of the work detail",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
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
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
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
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
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
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Aggregated Hours Per Week",
			"name": "aggregatedHoursPerWeek",
			"type": "number",
			"default": 24,
			"description": "This read-only field provides the user with a single point of knowledge as to what number of hours per week employment is actually registered in regards to the payrolling process. This number may be respectively based on the workpattern, deviating hours per week or shift hours. If the employment is an 'on call employment' (oproepkracht/invalkracht) the number is either NULL or represents the min-hours if that is applicable.\nThis field is especially useful for third-parties that want to know the number of hours per week (without having to apply specific Loket logic). I.e. this field is not visible in Loket GUI.",
			"routing": {
				"send": {
					"property": "aggregatedHoursPerWeek",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Average Hours Per Week",
			"name": "averageHoursPerWeek",
			"type": "number",
			"default": 32,
			"description": "This field can be used to register the average hours per week an employment with varying hours works. For example, 0 hour contracts and min max contracts. The value of this field does NOT directly affect the payrolling proces.",
			"routing": {
				"send": {
					"property": "averageHoursPerWeek",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Average Parttime Factor",
			"name": "averageParttimeFactor",
			"type": "number",
			"default": 0,
			"description": "This field is used to register the deviating value of the parttimefactor, purely for administrative purposes. The parttimefactor is normally calculated by workinghours dividing by shifthours multplied by 100. \nPlease note that this field is not used in the actual payroll proces! For the payroll process the number of hours is used.",
			"routing": {
				"send": {
					"property": "averageParttimeFactor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Calculate Using Work Pattern",
			"name": "calculateUsingWorkPattern",
			"type": "json",
			"default": "{\n  \"daysDailyRate\": false,\n  \"deviatingDaysAndHours\": false,\n  \"hoursBrokenPeriod\": false,\n  \"hoursRegularPeriod\": false,\n  \"leaveHours\": true\n}",
			"description": "Indications in this objects determine whether specific values should be calculated based on the bi-weekly workPattern (specified in the `workPattern` object). Onderliggende elementen geven aan of specifieke waardes berekend moeten worden op basis van het twee wekelijks werkpatroon `workPattern`\n",
			"routing": {
				"send": {
					"property": "calculateUsingWorkPattern",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Contract Code",
			"name": "contractCode",
			"type": "json",
			"default": "{\n  \"code\": 1022,\n  \"description\": \"SLA-PT-met toeslagen ATW (88)\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "This field is specialy made for convenience stores. The field is the type of contract.\n\n`contractCode` is a metadata field within the employer context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "contractCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Hours Per Week",
			"name": "deviatingHoursPerWeek",
			"type": "number",
			"default": 32,
			"description": "If this field is empty the fulltime hours are based as defined by the shift, this optional field is used to register an overwriting value. The value can be less or more then the fulltime hours a week.",
			"routing": {
				"send": {
					"property": "deviatingHoursPerWeek",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Sv Days Per Period",
			"name": "deviatingSvDaysPerPeriod",
			"type": "number",
			"default": 20,
			"description": "Sv (social insurance) days are normally calculated by hours per shift, this optional field is used to register a deviating value.",
			"routing": {
				"send": {
					"property": "deviatingSvDaysPerPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The end date of the entity. The date is up to and including.\n",
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
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Flexible Hours Contract",
			"name": "flexibleHoursContract",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Minimum uren contract\"\n}",
			"description": "The field indicates the type of flexible contract. If not applicable, please set to NULL.",
			"routing": {
				"send": {
					"property": "flexibleHoursContract",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
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
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Regular Work Pattern",
			"name": "regularWorkPattern",
			"type": "boolean",
			"default": true,
			"description": "When the employee works the same amount of hours per day every week, then the workpattern is regular.",
			"routing": {
				"send": {
					"property": "regularWorkPattern",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Shift",
			"name": "shift",
			"type": "json",
			"default": "{\n  \"bonusPercentage\": 12,\n  \"fullTimeHoursPerWeek\": 40,\n  \"shiftNumber\": 1\n}",
			"description": "The shift determines the full-time hours and bonus percentage.\n\n`shift` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "shift",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Shift Rate Sick Leave",
			"name": "shiftRateSickLeave",
			"type": "json",
			"default": "{\n  \"bonusPercentage\": 12,\n  \"fullTimeHoursPerWeek\": 40,\n  \"shiftNumber\": 1\n}",
			"description": "The shift determines the full-time hours and bonus percentage.\n\n`shiftRateSickLeave` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "shiftRateSickLeave",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "Start date of the record.\n\nA (linked chain)[./#section/Data/Date-chains] is maintained within this resource.\n",
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
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "Work Pattern",
			"name": "workPattern",
			"type": "json",
			"default": "{\n  \"evenWeeks\": {\n    \"friday\": 2,\n    \"monday\": 0,\n    \"saturday\": 0,\n    \"sunday\": 0,\n    \"thursday\": 8,\n    \"tuesday\": 8,\n    \"wednesday\": 8\n  },\n  \"oddWeeks\": {\n    \"friday\": 4,\n    \"monday\": 8,\n    \"saturday\": 0,\n    \"sunday\": 0,\n    \"thursday\": 7.5,\n    \"tuesday\": 8,\n    \"wednesday\": 4\n  }\n}",
			"description": "The applicable work pattern for a period of 2 weeks can be stored in this object. Each field contains the number of work hours for that day in the 2-week period. <br /> Please note that the workPattern should be left NULL if no data is present (as opposed to filling all fields with 0) <br /> Each field represent the number of hours the employee normally works on that day.\n",
			"routing": {
				"send": {
					"property": "workPattern",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Put Working Hours By Working Hours ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/workinghours",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Get Working Hours By Employment ID"
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
						"Working Hours"
					],
					"operation": [
						"Get Working Hours By Employment ID"
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
						"Working Hours"
					],
					"operation": [
						"Get Working Hours By Employment ID"
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
						"Working Hours"
					],
					"operation": [
						"Get Working Hours By Employment ID"
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
						"Working Hours"
					],
					"operation": [
						"Get Working Hours By Employment ID"
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
						"Working Hours"
					],
					"operation": [
						"Get Working Hours By Employment ID"
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
						"Working Hours"
					],
					"operation": [
						"Get Working Hours By Employment ID"
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
						"Working Hours"
					],
					"operation": [
						"Get Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/workinghours",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
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
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
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
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
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
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Aggregated Hours Per Week",
			"name": "aggregatedHoursPerWeek",
			"type": "number",
			"default": 24,
			"description": "This read-only field provides the user with a single point of knowledge as to what number of hours per week employment is actually registered in regards to the payrolling process. This number may be respectively based on the workpattern, deviating hours per week or shift hours. If the employment is an 'on call employment' (oproepkracht/invalkracht) the number is either NULL or represents the min-hours if that is applicable.\nThis field is especially useful for third-parties that want to know the number of hours per week (without having to apply specific Loket logic). I.e. this field is not visible in Loket GUI.",
			"routing": {
				"send": {
					"property": "aggregatedHoursPerWeek",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Average Hours Per Week",
			"name": "averageHoursPerWeek",
			"type": "number",
			"default": 32,
			"description": "This field can be used to register the average hours per week an employment with varying hours works. For example, 0 hour contracts and min max contracts. The value of this field does NOT directly affect the payrolling proces.",
			"routing": {
				"send": {
					"property": "averageHoursPerWeek",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Average Parttime Factor",
			"name": "averageParttimeFactor",
			"type": "number",
			"default": 0,
			"description": "This field is used to register the deviating value of the parttimefactor, purely for administrative purposes. The parttimefactor is normally calculated by workinghours dividing by shifthours multplied by 100. \nPlease note that this field is not used in the actual payroll proces! For the payroll process the number of hours is used.",
			"routing": {
				"send": {
					"property": "averageParttimeFactor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Calculate Using Work Pattern",
			"name": "calculateUsingWorkPattern",
			"type": "json",
			"default": "{\n  \"daysDailyRate\": false,\n  \"deviatingDaysAndHours\": false,\n  \"hoursBrokenPeriod\": false,\n  \"hoursRegularPeriod\": false,\n  \"leaveHours\": true\n}",
			"description": "Indications in this objects determine whether specific values should be calculated based on the bi-weekly workPattern (specified in the `workPattern` object). Onderliggende elementen geven aan of specifieke waardes berekend moeten worden op basis van het twee wekelijks werkpatroon `workPattern`\n",
			"routing": {
				"send": {
					"property": "calculateUsingWorkPattern",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Contract Code",
			"name": "contractCode",
			"type": "json",
			"default": "{\n  \"code\": 1022,\n  \"description\": \"SLA-PT-met toeslagen ATW (88)\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "This field is specialy made for convenience stores. The field is the type of contract.\n\n`contractCode` is a metadata field within the employer context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "contractCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Hours Per Week",
			"name": "deviatingHoursPerWeek",
			"type": "number",
			"default": 32,
			"description": "If this field is empty the fulltime hours are based as defined by the shift, this optional field is used to register an overwriting value. The value can be less or more then the fulltime hours a week.",
			"routing": {
				"send": {
					"property": "deviatingHoursPerWeek",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Sv Days Per Period",
			"name": "deviatingSvDaysPerPeriod",
			"type": "number",
			"default": 20,
			"description": "Sv (social insurance) days are normally calculated by hours per shift, this optional field is used to register a deviating value.",
			"routing": {
				"send": {
					"property": "deviatingSvDaysPerPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The end date of the entity. The date is up to and including.\n",
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
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Flexible Hours Contract",
			"name": "flexibleHoursContract",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Minimum uren contract\"\n}",
			"description": "The field indicates the type of flexible contract. If not applicable, please set to NULL.",
			"routing": {
				"send": {
					"property": "flexibleHoursContract",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
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
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Regular Work Pattern",
			"name": "regularWorkPattern",
			"type": "boolean",
			"default": true,
			"description": "When the employee works the same amount of hours per day every week, then the workpattern is regular.",
			"routing": {
				"send": {
					"property": "regularWorkPattern",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Shift",
			"name": "shift",
			"type": "json",
			"default": "{\n  \"bonusPercentage\": 12,\n  \"fullTimeHoursPerWeek\": 40,\n  \"shiftNumber\": 1\n}",
			"description": "The shift determines the full-time hours and bonus percentage.\n\n`shift` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "shift",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Shift Rate Sick Leave",
			"name": "shiftRateSickLeave",
			"type": "json",
			"default": "{\n  \"bonusPercentage\": 12,\n  \"fullTimeHoursPerWeek\": 40,\n  \"shiftNumber\": 1\n}",
			"description": "The shift determines the full-time hours and bonus percentage.\n\n`shiftRateSickLeave` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "shiftRateSickLeave",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "Start date of the record.\n\nA (linked chain)[./#section/Data/Date-chains] is maintained within this resource.\n",
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
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Work Pattern",
			"name": "workPattern",
			"type": "json",
			"default": "{\n  \"evenWeeks\": {\n    \"friday\": 2,\n    \"monday\": 0,\n    \"saturday\": 0,\n    \"sunday\": 0,\n    \"thursday\": 8,\n    \"tuesday\": 8,\n    \"wednesday\": 8\n  },\n  \"oddWeeks\": {\n    \"friday\": 4,\n    \"monday\": 8,\n    \"saturday\": 0,\n    \"sunday\": 0,\n    \"thursday\": 7.5,\n    \"tuesday\": 8,\n    \"wednesday\": 4\n  }\n}",
			"description": "The applicable work pattern for a period of 2 weeks can be stored in this object. Each field contains the number of work hours for that day in the 2-week period. <br /> Please note that the workPattern should be left NULL if no data is present (as opposed to filling all fields with 0) <br /> Each field represent the number of hours the employee normally works on that day.\n",
			"routing": {
				"send": {
					"property": "workPattern",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Working Hours"
					],
					"operation": [
						"Post Working Hours By Employment ID"
					]
				}
			}
		},
];
