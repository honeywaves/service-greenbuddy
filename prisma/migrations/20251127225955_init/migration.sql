-- CreateTable
CREATE TABLE "plants" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mood" TEXT NOT NULL DEFAULT 'happy',
    "last_action_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "plants_pkey" PRIMARY KEY ("id")
);
