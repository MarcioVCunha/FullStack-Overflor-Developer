CREATE TABLE "questions" (
	"id" serial NOT NULL,
	"student" integer,
	"question" TEXT NOT NULL,
	"class" integer NOT NULL,
	"tags" TEXT NOT NULL,
	"answered" bool NOT NULL DEFAULT 'false',
	"submitAt" TEXT NOT NULL,
	"answeredAt" TEXT,
	"answeredBy" integer,
	"answer" TEXT,
	CONSTRAINT "questions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "students" (
	"id" serial NOT NULL UNIQUE,
	"token" uuid NOT NULL UNIQUE,
	"name" TEXT NOT NULL UNIQUE,
	CONSTRAINT "students_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "classes" (
	"id" serial NOT NULL,
	"className" TEXT NOT NULL UNIQUE,
	CONSTRAINT "classes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "questions" ADD CONSTRAINT "questions_fk0" FOREIGN KEY ("student") REFERENCES "students"("id");
ALTER TABLE "questions" ADD CONSTRAINT "questions_fk1" FOREIGN KEY ("class") REFERENCES "classes"("id");
ALTER TABLE "questions" ADD CONSTRAINT "questions_fk2" FOREIGN KEY ("answeredBy") REFERENCES "students"("id");






