CREATE schema test;

CREATE TABLE test."User" (
	id serial4 NOT NULL,
	email text NOT NULL,
	name text NOT NULL,
	create_at timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "User_pkey" PRIMARY KEY (id)
);
CREATE UNIQUE INDEX "User_email_key" ON test."User" USING btree (email);

CREATE TABLE test."Airplain" (
	id serial4 NOT NULL,
	model text NULL,
	create_at timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "Airplain_pkey" PRIMARY KEY (id)
);

CREATE TABLE test."Car" (
	id serial4 NOT NULL,
	model text NULL,
	create_at timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at timestamp(3) NOT NULL,
	CONSTRAINT "Car_pkey" PRIMARY KEY (id)
);

-- CREATE TABLE test."Roles" (
-- 	id serial4 NOT NULL,
-- 	updated_at timestamp(3) NOT NULL,
-- 	created_at timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- 	"name" text NOT NULL,
-- 	access_lvl int4 NOT NULL,
-- 	CONSTRAINT "Roles_pkey" PRIMARY KEY (id)
-- );