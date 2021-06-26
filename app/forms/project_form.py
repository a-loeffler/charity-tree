from flask_wtf import FlaskForm
from wtforms import (StringField, DateField, DecimalField, IntegerField, BooleanField, SelectField, SubmitField, DateField, TextAreaField)
from wtforms.validators import DataRequired


class NewProject(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    description = TextAreaField("description", validators=[DataRequired()])
    goal = DecimalField("goal", validators=[DataRequired()])
    goal_reached_date = DateField("goal_reached_date")
    deadline = DateField("deadline", validators=[DataRequired()])
    current_amount = DecimalField("current_amount")
    owner_id = IntegerField("owner_id", validators=[DataRequired()])
    category_id = IntegerField("category_id")
    page_html = StringField("page_html")
