# Auto-generated initial migration (simplified)
from alembic import op
import sqlalchemy as sa

revision = 'init'

def upgrade():

    op.create_table('users', sa.Column('id', sa.Integer, primary_key=True), sa.Column('username', sa.String(128), nullable=False), sa.Column('hashed_password', sa.String(256), nullable=False))
    op.create_table('customers', sa.Column('id', sa.Integer, primary_key=True), sa.Column('name', sa.String(255), nullable=False), sa.Column('phone', sa.String(64)), sa.Column('address', sa.String(1024)), sa.Column('page_no', sa.String(64)))
    op.create_table('debts', sa.Column('id', sa.Integer, primary_key=True), sa.Column('customer_id', sa.Integer, sa.ForeignKey('customers.id')), sa.Column('date', sa.String(32)), sa.Column('item', sa.String(255)), sa.Column('quantity', sa.Float), sa.Column('price', sa.Float), sa.Column('total', sa.Float), sa.Column('receivable', sa.Float), sa.Column('note', sa.Text))

def downgrade():
    op.drop_table('debts')
    op.drop_table('customers')
    op.drop_table('users')
